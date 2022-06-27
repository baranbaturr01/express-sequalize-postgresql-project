const Sequalize = require('sequelize');
const sequalize = new Sequalize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const database = {}

database.Sequalize = Sequalize
database.sequalize = sequalize

module.exports = database;
