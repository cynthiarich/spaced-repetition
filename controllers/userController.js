const db = require('../models');

const updateUserTopics = async (UserId, topics, callback) =>{
    //get the list of topics selected in the past
    const pastSelections = await db.UserTopic.findAll({
        attributes: ["TopicId"],
        where: {
            UserId,
            active: true
        }
    }).then(result => {
        return result.map(topic => topic.dataValues.TopicId);
    })
    //iterate through the array of topics
    //selected in this update
    //add any not already selected
    await topics.forEach(async (topic) => {
        if(!pastSelections.includes(topic)) {
            //this is a new topic for this user
            await db.UserTopic.create({
                UserId,
                TopicId: topic
            }).then(result => {
            }).catch(err => console.log(err));
        }
    })
    //iterate through past selections
    //if no longer selected, mark active = false
    await pastSelections.forEach(async (selection) => {
        if(!topics.includes(selection)) {
            await db.UserTopic.update(
                {active: false},
                {where: {
                    UserId,
                    TopicId: selection
                }}
            )
        }
    })

    return callback("user topics updated");
}

module.exports = { updateUserTopics }