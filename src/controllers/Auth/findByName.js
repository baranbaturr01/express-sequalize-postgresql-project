const userService = require('../../services/UserService');
module.exports = (req, res, next) => {

    const name = req.body.name;
    return userService.findByName(name).then(result => {
        if (result) {
            res.status(200).json({
                message: 'User found',
                data: result
            })
        } else {
            res.status(404).json({
                message: 'User not found'
            })
        }
    }
    ).catch(err => {
        res.status(500).json({
            message: 'Error',
            data: err
        })
    }
    )

}