require("dotenv").config();

module.exports = {
  "development": {
    username: "root",
    password: process.env.DB_PASS,
    database: "spaced_repetition",
    host: "127.0.0.1",
    dialect: "mysql",
    port: "3306"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.CLEARDB_DATABASE_URL,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
};
