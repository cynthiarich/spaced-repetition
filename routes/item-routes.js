const db = require('../models');
const { createItem } = require('../controllers/itemController');
const { reviewSession } = require('../controllers/sessionController');

module.exports = (app) => {

    app.post("/api/topics", (req, res) => {
        db.Topic.create({
           name,
           desc 
        }).then(result => {
            return res.json(result);
        })
    })

    app.get("/api/topics", (req, res) => {
        db.Topic.findAll()
            .then(result => {
                return res.json(result);
            })
    })

    app.get("/api/subtopics/:topic", (req, res) => {
        db.SubTopic.findAll({
            include: {
                model: db.Topic,
                where: {
                    name: req.params.topic
                }
            }
        })
            .then(result => {
                return res.json(result);
            })
    })

    app.post("/api/item", async (req, res) => {
        const { UserId, subtopic, visibility, stem, resp1, resp2, resp3, resp4} = req.body;

        await createItem(UserId, subtopic, visibility, stem, resp1, resp2, resp3, resp4, callback => {
            return res.json(callback)
        })
    })

    app.get("/api/item/:ItemId", (req, res) =>{
        db.Item.findOne({
            where: {
                id: req.params.ItemId
            },
            include: [{
                model: db.ItemResp
            }]
        })
        .then(item => {
            return res.json(item);
        })
    })

    app.get("/api/session/results/:UserId", async (req, res) => {
        const { UserId } = req.params;

        await reviewSession(UserId, callback => {
            return res.json(callback);
        })
    })
}