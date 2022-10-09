const isEmpty = require('is-empty');

const UserService = require('../../services/UserService');

module.exports = (req, res, next) => {
  const userId = req.params.id;

  if (isEmpty(userId)) {
    return res.status(400).json({
      message: 'User id is required'
    })
  }

  return UserService.getUserById(userId).then(user => {
    if (isEmpty(user)) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    const userPastBooks = user.userBooks.filter(userBook => userBook.is_read === false)
    const userPresentBooks = user.userBooks.filter(userBook => userBook.is_read === true);

    const pastBooks = userPastBooks.map(userBook => {
      return {name: userBook.book.name, userScore: userBook.user_score}
    });
    //if user_score is null, then not show it
    const presentBooks = userPresentBooks.map(userBook => {
      return {name: userBook.book.name}
    } );
    return res.json({
      id: user.id,
      name: user.name,
      books: {
        past: pastBooks,
        present: presentBooks
      }
    })


    //concate userBooks and books
  });
}