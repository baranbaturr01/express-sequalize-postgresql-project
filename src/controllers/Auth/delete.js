const userService = require('../../services/UserService');
module.exports = (req, res, next) => {
    const id = req.body.id;
    return userService.deleteById(id).then(result => {
        if (result) {
            res.status(200).json({
                message: 'User deleted',
                data: result
            })
        } else {
            res.status(404).json({
                message: 'User not found'
            })
        }



    }).catch(err => {
        res.status(500).json({
            message: 'Error',
            data: err
        })
    }
    )
}