const express = require("express");
const passport = require("passport");
const path = require("path");
require("dotenv");

const PORT = process.env.PORT || 3001;
const db = require("./models");

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

require('./config/passport')(passport);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client/build")));
}

// Routes
// =============================================================

require("./routes/auth-routes.js")(app);
require("./routes/user-routes")(app);
require("./routes/item-routes.js")(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});