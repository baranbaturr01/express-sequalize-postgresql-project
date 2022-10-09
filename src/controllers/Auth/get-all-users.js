const UserService= require('../../services/UserService');
module.exports = (req, res, next) => {

  return UserService.getAllUsers().then(user=>{
    return res.json(user)
  })

}