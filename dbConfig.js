//DO NOT TOUCH
//This file configures and creates a new sequelize instance.

const config = {
  database: 'sequelize_stretchTwo',
  dialect: 'postgres',
  logging: false,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
};

const Sequelize = require('sequelize');

const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
module.exports = db;
