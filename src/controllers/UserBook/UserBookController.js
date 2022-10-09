import isEmpty from "is-empty";

import {
  findByBookId,
  isExist,
  updateScoreAndIsRead,
  createUserBook
} from '../../services/UserBookService.js'

const BorrowBook = (req, res) => {

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
  return findByBookId(bookId).then(userBook => {
    if (userBook) {
      return res.status(400).json({
        message: 'Book is already borrowed'
      })
    }
    return createUserBook({user_id: userId, book_id: bookId, is_read: true}).then(userBook => {
      return res.json(userBook);
    })
  })
}

const returnBook = (req, res) => {
  const userId = req.params.user_id
  const bookId = req.params.book_id
  const score = req.body.score

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

  if (isEmpty(score)) {
    return res.status(400).json({
      message: 'Score is required'
    })
  }

  return isExist(userId, bookId).then(userBook => {
    if ( ! userBook) {
      return res.status(404).json({
        message: 'Book is not borrowed'
      })
    }
    return updateScoreAndIsRead(userId, bookId, score).then(userBook => {
      if (userBook === 1) {
        return res.status(200).json({
          message: 'Book is returned'
        })
      }
      return res.status(500).json({
        message: 'Something went wrong'
      })
    })
  })
}

export default {
  BorrowBook,
  returnBook
}