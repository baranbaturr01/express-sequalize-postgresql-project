import BookModel from '../models/books.js'

const create = (data) => {
  return BookModel.create(data).then(result => {
    return {
      id: result.id,
      name: result.name,
    }
  })
}

const getAll = () => {

  return BookModel.findAll().then(result => {
    return result.map(book => {
      return {
        id: book.id,
        name: book.name,
      }
    })
  })
}
const getBookById = (id) => {
  return BookModel.findByPk(id).then(result => {
    return {
      id: result.id,
      name: result.name,
      score: result.score
    }
  })
}

export {
  create,
  getAll,
  getBookById
}