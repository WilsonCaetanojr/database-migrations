const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Users = require("../models/Users");
const Addresses = require("../models/Addresses");

const connection = new Sequelize(dbConfig);

Users.init(connection);
Addresses.init(connection);

Addresses.associate(connection.models);

module.exports = connection;
