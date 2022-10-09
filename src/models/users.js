import db from '../services/db.js';

import {Sequelize,DataTypes} from 'sequelize';
import UserBook from './user-books.js';

const User = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    foreignKey: true
  },
  name: {
    type: DataTypes.STRING,
  }
});

User.hasMany(UserBook,
  {
    as: 'userBooks', foreignKey: 'user_id'
  });
UserBook.belongsTo(User, {foreignKey: 'user_id'});

export default User;