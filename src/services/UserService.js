import User from '../models/users.js';
import UserBookModel from '../models/user-books.js';
import BookModel from '../models/books.js';

  const create= (data) => {
    return User.create(data).then(result => {
      return result;
    })
  }
  const findByName= (name) => {
    return User.findOne({
      where: {
        name: name
      }
    }).then(result => {
      return result;
    })
  }
 const deleteById= (id) => {
    return User.destroy({
      where: {
        id: id
      }
    }).then(result => {
      return result;
    })
  }

 const  getAllUsers= () => {
    return User.findAll().then(users => {

      return users.map(user => {
        return {
          id: user.id,
          name: user.name
        }
      })
    })
  }
  const getUserById= (id) => {

    return User.findOne({
      where: {
        id: id
      },
      include: {
        model: UserBookModel,
        as: 'userBooks',
        include: {
          model: BookModel,
          as: 'book'
        }

      }
    }).then(user => {
      return user;
    })
  }

  export {
    create,
    findByName,
    deleteById,
    getAllUsers,
    getUserById
  }