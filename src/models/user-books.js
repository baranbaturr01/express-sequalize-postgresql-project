import db from '../services/db.js';
import {Sequelize,DataTypes} from "sequelize";

const UserBook = db.define('user-books', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      notNull: true,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    book_id: {
      type: DataTypes.INTEGER,
      notNull: true,
      references: {
        model: 'books',
        key: 'id',
      }
    },
    is_read: {
      type: DataTypes.BOOLEAN,
    },
    user_score: {
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false
  });

export default UserBook;