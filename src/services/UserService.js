const userModel = require('../models/users');
const userBookModel = require('../models/user-books');
const bookModel = require('../models/books');
module.exports = {
  create: (data) => {
    return userModel.create(data).then(result => {
      return result;
    })
  },
  findByName: (name) => {
    return userModel.findOne({
      where: {
        name: name
      }
    }).then(result => {
      return result;
    })
  },
  deleteById: (id) => {
    return userModel.destroy({
      where: {
        id: id
      }
    }).then(result => {
      return result;
    })
  },

  getAllUsers: () => {
    return userModel.findAll().then(users => {

      return users.map(user => {
        return {
          id: user.id,
          name: user.name
        }
      })
    })
  },
  getUserById: (id) => {

    return userModel.findOne({
      where: {
        id: id
      },
      include: {
        model: userBookModel,
        as: 'userBooks',
        include: {
          model: bookModel,
          as: 'book'
        }

      }
    }).then(user => {
      return user;
    })
  }
}