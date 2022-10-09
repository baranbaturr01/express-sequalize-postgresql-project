const database = require('../services/db');
const Sequelize = require('sequelize');

const UserBook = database.sequalize.define('user-books', {

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      notNull: true,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    book_id: {
      type: Sequelize.INTEGER,
      notNull: true,
      references: {
        model: 'books',
        key: 'id',
      }
    },
    is_read: {
      type: Sequelize.BOOLEAN,
    },
    user_score: {
      type: Sequelize.INTEGER,
    }
  },
  {
    timestamps: false
  });

module.exports = UserBook;