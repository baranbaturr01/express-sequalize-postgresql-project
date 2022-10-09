const isEmpty = require('is-empty')
const BookService=require('../../services/BookService');

module.exports = (req, res, next) => {

  const bookName = req.body.name;

  if (isEmpty(bookName)) {
    return res.status(400).json({message: 'Book name is required'});
  }

  return BookService.createBook({name: bookName,score:-1}).then(book=>{
    return res.json(book);
  })
}