import  {getAllUsers, create, getUserById, deleteById, findByName} from '../../services/UserService.js'
import isEmpty from "is-empty";

const getAll = async (req, res) => {
  const users = await getAllUsers()
  res.json(users)
}
const createUser = async (req, res) => {
  const name = req.body.name

  if (isEmpty(name)) {
    return res.status(400).json({
      message: 'Name is required'
    })
  }

  return create({name: name}).then(user => {
    return res.json(user)
  })
}

const getUserByUserId = async (req, res) => {
  const userId = req.params.id;

  if (isEmpty(userId)) {
    return res.status(400).json({
      message: 'User id is required'
    })
  }

  return getUserById(userId).then(user => {
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

  });
}

export default {
  getAll,
  createUser,
  getUserByUserId
}