const db = require('../models');
const { updateUserTopics } = require('../controllers/userController');
const { initUserSession, saveResponse } = require('../controllers/sessionController');

module.exports = (app) => {

  app.get("/api/user/:UserId", (req, res) => {
    db.User.findOne({
      attributes: ["durationGoal", "firstName", "id", "userType"],
      where: {
        id: req.params.UserId
      }
    }).then(result => {
        return res.json(result);
    }).catch(err => console.log(err));
  })

  app.post("/api/user", async (req, res) => {
      const { UserId, topics, duration } = req.body;

      await db.User.update(
          {durationGoal: duration},
          {where: {
              id: UserId
          }
      }).then(result => {
            console.log(result);
      }).catch(err => console.log(err));

      await updateUserTopics(UserId, topics, callback => {
          return res.json(callback);
      })
  })

  app.get("/api/usertopics/:UserId", (req, res) => {
      db.UserTopic.findAll({
          attributes: ["TopicId"],
          where: {
              UserId: req.params.UserId,
              active: true
          }
      }).then(result => {
            return res.json(result);
      }).catch(err => console.log(err));
  })

  app.get("/api/session/init/:UserId", async (req, res) => {
      
        await initUserSession(req.params.UserId, callback => {
            return res.json(callback)
        })
    })

  app.post("/api/response", async (req, res) => {
    const { UserId, ItemId, ItemRespId } = req.body;  
    await saveResponse(UserId, ItemId, ItemRespId, callback => {
      return res.json(callback);
    })
  })

}