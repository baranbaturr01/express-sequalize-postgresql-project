const isEmpty = require('is-empty');

const BookService = require('../../services/BookService');

module.exports = (req, res, next) => {
  const bookId = req.params.id;

  if (isEmpty(bookId)) {
    return res.status(400).json({
      message: 'Book id is required'
    })
  }

  return BookService.getBookById(bookId).then(book => {
    res.status(200).json(book);

  }).catch(err => {
    return res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  })
}