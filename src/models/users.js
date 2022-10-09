const database = require('../services/db');
const Sequelize = require('sequelize');
const UserBook = require('./user-books');

const User = database.sequalize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    foreignKey: true
  },
  name: {
    type: Sequelize.STRING,
  }
});

User.hasMany(UserBook,
  {
    as: 'userBooks', foreignKey: 'user_id'
  });
UserBook.belongsTo(User, {foreignKey: 'user_id'});

module.exports = User;