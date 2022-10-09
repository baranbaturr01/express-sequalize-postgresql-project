import db from '../services/db.js';
import {DataTypes} from "sequelize";
import UserBook from './user-books.js';

const Book = db.define('books', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  score: {
    type: DataTypes.INTEGER,
    default: -1,
    notNull: true
  },
});
Book.hasMany(UserBook,
  {
    as: 'userBooks', foreignKey: 'book_id'
  });
UserBook.belongsTo(Book, {foreignKey: 'book_id'});


export default Book;