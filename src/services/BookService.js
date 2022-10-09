const BookModel = require('../models/books')

module.exports = {

  createBook: (data) => {
    return BookModel.create(data).then(result => {
      return {
        id: result.id,
        name: result.name,
      }
    })
  },

  getAllBooks: () => {

    return BookModel.findAll().then(result => {
      return result.map(book => {
        return {
          id: book.id,
          name: book.name,
        }
      })
    })
  },
  getBookById: (id) => {
    return BookModel.findByPk(id).then(result => {
      return {
        id: result.id,
        name: result.name,
        score: result.score
      }
    })
  },
}