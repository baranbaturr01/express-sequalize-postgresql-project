const userService = require('../../services/UserService');
module.exports = (req, res, next) => {

    return userService.getAllUsers().then(users => {
        return res.json(users)
    }
    ).catch(err => {
        res.status(500).json({
            message: 'Error',
            data: err
        })
    }
    )


}