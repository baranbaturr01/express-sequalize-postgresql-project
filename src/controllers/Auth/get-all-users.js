import {getAllUsers,deleteById,findByName,create,getUserById} from '../../services/UserService';

export default (req, res, next) => {

  return getAllUsers().then(user=>{
    return res.json(user)
  })
}
