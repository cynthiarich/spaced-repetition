const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports = (app) => {

  app.post("/api/signup", (req, res) => {
    const { name, email, password } = req.body;

    db.User.findOne({
      where: { userEmail: email }
    })
      .then(result => {
        if (result) {
          return res.status(400).json({ email: "Email already exists." });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) throw err;
              db.User.create({
                userEmail: email,
                firstName: name,
                password: hash
              })
                .then(user => {
                  res.json(user);
                })
                .catch(err => console.log(err));
            })
          });

        }
      })
  });

  app.post("/api/signin", (req, res) => {

    const { email, password } = req.body;

    db.User.findOne({
      where: { userEmail: email }
    })
      .then(result => {
        if (!result) {
          return res.status(400).json({ emailnotfound: "Email not found." });
        }

        bcrypt.compare(password, result.dataValues.password)
          .then(isMatch => {
            if (isMatch) {
                const payload = {
                id: result.dataValues.id,
                name: result.dataValues.firstName,
                type: result.dataValues.userType
              };

              jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                (err, token) => {
                  return res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              return res.status(400).json({ passwordincorrect: "Password incorrect" });
            }
          });
      });
  });

}