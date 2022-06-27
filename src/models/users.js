const database = require('../services/db');
const Sequelize = require('sequelize');
const User = database.sequalize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    },
    surname: {
        type: Sequelize.STRING,
    },
});

module.exports = User;