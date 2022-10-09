const BookService = require('../../services/BookService');

module.exports = (req, res, next) => {

  return BookService.getAllBooks().then(books => {
    res.status(200).json(books);

  }).catch(err => {
    return res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  })
}