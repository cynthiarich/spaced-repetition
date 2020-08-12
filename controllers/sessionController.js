const db = require('../models');
const { Op } = require("sequelize");

const initUserSession = async (UserId, callback) => {
    //get active sub-topics for user
    const activeTopics = await db.UserTopic.findAll({
        where: {
            UserId,
            active: true
        },
        include: [{
            model: db.Topic,
                include: [{
                    model: db.SubTopic
                }]
        }]
    }).then(topics => {
        // return just the subtopic ids
        const topicArray = topics.map(topic => topic.Topic.SubTopics);
        const subTopics = topicArray.flat().map(subTopic => subTopic.dataValues.id);
        return subTopics;
    }).catch(err => console.log(err));
    //get items with these subtopics
    //along with associated rScore from userItem
    const allItems = await db.Item.findAll({
        attributes: ['id'],
        where: {
            SubTopicId: { 
                [Op.in]: activeTopics
            },
            [Op.or]: [
                { public: true },
                { UserId }
            ]
        },
        include: [{
            model: db.UserItem,
            attributes: ['rScore', 'updatedAt'],
            where: {
                UserId
            },
            order: [['updatedAt', 'ASC']],
            required: false
        }]
    }).then(items => {
        const validItems = items.map(item => {
            const { id, UserItems } = item.dataValues;
            let rScore = 0;
            let itemObj;
            if(UserItems.length !== 0){
                itemObj = {
                    id,
                    rScore: UserItems[0].dataValues.rScore,
                    updatedAt: UserItems[0].dataValues.updatedAt
                }
            } else {
                itemObj = {
                    id,
                    rScore,
                    updatedAt: null
                }
            }
            return itemObj;
        })
        return validItems;
    }).catch(err => console.log(err));
    //from the valid items, pull randomly within
    //rScore ranges to ensure a challenging distribution
    //and ensure we don't discourage the user with hard items
    //sessionRatios ensure the session list we return
    //contains a balance of items the ratios will be
    //1 < R < 20: 5 items
    //21 < R < 40: 4 items
    //41 < R < 60: 3 items
    //61 < R < 80: 2 items
    //81 < R < 94: 2 items
    //R = 0: 2 items
    //R > 95: 2 items
    //if the user doesn't have any items within a specified range
    //those slots are given to the next level in sequence
    const sessionRatio = [5, 4, 3, 2, 2, 2, 2];
    let sessionBalance = 0;
    const sessionItems = [];
    sessionRatio.forEach((numItems, index) => {
        sessionBalance = sessionBalance + numItems;
        let lowerBound = 0;
        let upperBound = 0;
        switch(index) {
            case 0:
                lowerBound = 1;
                upperBound = 20;
                break;
            case 1:
                lowerBound = 21;
                upperBound = 40;
                break;
            case 2:
                lowerBound = 41;
                upperBound = 60;
                break;
            case 3:
                lowerBound = 61;
                upperBound = 80;
                break;
            case 4:
                lowerBound = 81;
                upperBound = 94;
                break;
            case 5:
                lowerBound = 0;
                upperBound = 0;
                break;
            case 6:
                lowerBound = 95;
                upperBound = 200;
                break;
            default:
                lowerBound = 1;
                upperBound = 20;
        }
        const fullList = allItems.filter(item => item.rScore >= lowerBound && item.rScore <= upperBound);
        if (fullList.length >= sessionBalance){
            sessionItems.push(fullList.slice(0, sessionBalance))
        } else if (fullList.length < sessionBalance && fullList.length !== 0) {
            sessionBalance = sessionBalance - fullList.length;
            sessionItems.push(fullList);
        }
    })
    //last but not least, randomize the array
    //before sending it to the front end
    const sessionFinal = await shuffleArray(sessionItems.flat());
    //send it back to the front end
    callback(sessionFinal);

}

const shuffleArray = async (arr) => {
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

const saveResponse = async (UserId, ItemId, ItemRespId, callback) => {
    //get number of previous attempts
    const prevAttempts = await db.UserSession.count({
        where: {
            UserId,
            ItemId
        }
    }).then(num => num)
    .catch(err => console.log(err));
    //create this session record
    db.UserSession.create({
        UserId,
        ItemId,
        ItemRespId
    }).then(sess => {
    }).catch(err => console.log(err));
    //get previous data for this item
    const prevData = await db.UserItem.findOne({
            where: {
                UserId, 
                ItemId
            }
        }).then(userItem => {
                if(userItem){
                    return userItem.dataValues;
                } else {
                    return null;
                }
        }).catch(err => console.log(err));
   let prevScore = 0;
    if(prevData){
        prevScore = prevData.rScore;
    }
    //get correct/incorrect for this response
    const correct = await db.ItemResp.findOne({
        attributes: ['correct'],
        where: {
            id: ItemRespId
        }
    }).then(resp => resp.dataValues.correct)
    .catch(err => console.log(err));
    let newScore = 0;
    //ideally we'd use BKT or SM2 here, but for
    //the sake of MVP going with super simple
    if(correct === true){
        //each correct response increases the rScore
        //by 20 points - 5 consecutive correct responses
        //means an item is ready for review only
        newScore = prevScore + 20;
    } else {
        //each incorrect response decreases the rScore
        //by 50% of its current value
        newScore = prevScore.rScore/2;
    }
    //save new rScore
    if (prevData){
        db.UserItem.update(
            {rScore: newScore},
            {where: {
                UserId,
                ItemId
            }
        }).then(item => {
            callback(item); 
        }).catch(err => console.log(err));
    } else {
        db.UserItem.create({
            UserId,
            ItemId,
            rScore: newScore
        }).then(item => {
            callback(item);
        }).catch(err => console.log(err));
    }
}

const reviewSession = async (UserId, callback) => {
    const lastSession = await db.UserSession.findAll({
        where: {
            UserId
        },
        order: [['createdAt', 'DESC']],
        limit: 20,
        include: [{
            model: db.Item,
            include: [{
                model: db.ItemResp
            }]
        }]  
    }).then(session => {
        callback(session);
    })
}
    

module.exports = { initUserSession, saveResponse, reviewSession }