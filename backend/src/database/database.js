const Sequelize = require("sequelize");
const dbConfig = require("./config");

const database = new Sequelize(dbConfig);

module.exports = database;