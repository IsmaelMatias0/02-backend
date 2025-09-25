require('dotenv').config();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("test", "postgres", "123", {
  host: process.env.DB_HOST,
  dialect: "postgres",
});
module.exports = sequelize;
