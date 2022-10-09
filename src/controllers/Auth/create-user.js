const isEmpty=require('is-empty');
const UserService = require('../../services/UserService');

module.exports = (req, res, next) => {
  const name=req.body.name

  if (isEmpty(name)) {
    return res.status(400).json({
      message: 'Name is required'
    })
  }

  return UserService.create({name:name}).then(user => {
    return res.json(user)
  })
}