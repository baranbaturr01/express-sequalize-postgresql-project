const database = require('../services/db');
const Sequelize = require('sequelize');
const UserBook = require('./user-books');

const Book = database.sequalize.define('books', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
  },
  score: {
    type: Sequelize.INTEGER,
    default: -1,
    notNull: true
  },
});
//aliases
Book.hasMany(UserBook,
  {
    as: 'userBooks', foreignKey: 'book_id'
  });
UserBook.belongsTo(Book, {foreignKey: 'book_id'});


module.exports = Book;