const UserModel = require('../../models/users');
const userService = require('../../services/UserService');
module.exports = (req, res, next) => {

    const name = req.body.name
    const surname = req.body.surname
    const email = req.body.email
    const password = req.body.password
    const data = {
        name: name,
        surname: surname,
        email: email,
        password: password
    }
    return userService.create(data).then(user => {
        return res.json(user)
    })
}