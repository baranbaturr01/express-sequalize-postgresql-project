const UserBook = require('../models/user-books');
const Book = require('../models/books');
module.exports = {

  create: (data) => {
    return UserBook.create(data).then(result => {
      return {
        id: result.id,
        user_id: result.user_id,
        book_id: result.book_id,
        is_read: result.is_read
      }
    })
  },

  findByBookId: (bookId) => {
    return UserBook.findOne({
      where: {
        book_id: bookId
      }
    }).then(result => {
      return result;
    })
  },

  isExist: (userId, bookId) => {
    return UserBook.findOne({
      where: {
        user_id: userId,
        book_id: bookId
      }
    }).then(result => {
      return result;
    })
  },
  updateScoreAndIsRead: (userId, bookId, score) => {
    //update book score in book table

    return Book.findOne({
      where: {
        id: bookId
      }
    }).then(book => {
      let newScore
      if (book.score===-1){
        newScore=score
      }else{
        newScore=(book.score+score)/2
      }
      return Book.update({
        score: newScore
      }, {
        where: {
          id: bookId
        }
      }).then(() => {
        return UserBook.update({
          is_read: false,
          user_score: score
        }, {
          where: {
            user_id: userId,
            book_id: bookId
          }
        }).then(result => {
          return result[0];
        })
      })
    })
  }
}