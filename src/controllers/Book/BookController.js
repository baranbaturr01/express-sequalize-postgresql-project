import {getAll, getBookById, create} from '../../services/BookService.js';
import isEmpty from "is-empty";

const createBook = async (req, res) => {
  const bookName = req.body.name;

  if (isEmpty(bookName)) {
    return res.status(400).json({message: 'Book name is required'});
  }

  return create({name: bookName, score: -1}).then(book => {
    return res.json(book);
  })
}

const getAllBooks = async (req, res) => {

  return getAll().then(books => {
    res.status(200).json(books);

  }).catch(err => {
    return res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  })
}

const getBookByBookId = async (req, res) => {
  const bookId = req.params.book_id;

  if (isEmpty(bookId)) {
    return res.status(400).json({
      message: 'Book id is required'
    })
  }

  console.log(bookId);
  return getBookById(bookId).then(book => {
    res.status(200).json(book);

  }).catch(err => {
    return res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  })
}

export default {
  createBook,
  getAllBooks,
  getBookByBookId
}
