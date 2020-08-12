const db = require('../models');

const createItem = async (UserId, subtopic, visibility, stem, resp1, resp2, resp3, resp4, callback) => {
    let SubTopicId;
    let public;
    const responses = [resp1, resp2, resp3, resp4];
    if(visibility === "public"){
        public = true;
    } else {
        public = false;
    }
    //get the subtopicId
    await db.SubTopic.findOne({
        attributes: ['id'],
        where: {
            name: subtopic
        }
    }).then(result => {
        if(result){
            SubTopicId = result.dataValues.id;
        } else {
            return callback("Invalid Subtopic")
        }
    }).catch(err => console.log(err));
    //create the item
    //TODO: consider using sequelize association to add responses
    await db.Item.create({
        itemStem: stem,
        dScore: .5,
        public,
        UserId,
        SubTopicId
    }).then(result => {
        createResponses(result.dataValues.id, responses, resp =>{
            return callback(result);
        });
    }).catch(err => console.log(err));
}

const createResponses = async (ItemId, responses, resp) =>{
    responses.forEach(async (response, index) => {
        let correct = false;
        if(index === 0){
            correct = true;
        } 
        await db.ItemResp.create({
            ItemId,
            respStem: response,
            correct
        }).then(result => {
            
        }).catch(err => console.log(err));
    })
    return resp("responses created");
}

module.exports = { createItem }