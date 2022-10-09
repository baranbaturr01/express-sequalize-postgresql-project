const isEmpty = require('is-empty')
const UserBookService = require('../../services/UserBookService');

module.exports = (req, res, next) => {
  const userId = req.params.user_id;
  const bookId = req.params.book_id;

  if (isEmpty(userId)) {
    return res.status(400).json({
      message: 'User id is required'
    })
  }
  if (isEmpty(bookId)) {
    return res.status(400).json({
      message: 'Book id is required'
    })
  }
  return UserBookService.findByBookId(bookId).then(userBook => {
    if (userBook) {
      return res.status(400).json({
        message: 'Book is already borrowed'
      })
    }
    return UserBookService.create({user_id: userId, book_id: bookId, is_read: true}).then(userBook => {
      return res.json(userBook);
    })
  })
}