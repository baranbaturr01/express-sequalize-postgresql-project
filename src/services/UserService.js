const userModel = require('../models/users');
module.exports = {
    create: (data) => {
        return userModel.create(data).then(result => {
            return result;
        })
    },
    findByName: (name) => {
        return userModel.findOne({
            where: {
                name: name
            }
        }).then(result => {
            return result;
        })
    },
    deleteById: (id) => {
        return userModel.destroy({
            where: {
                id: id
            }
        }).then(result => {
            return result;
        })
    },

    getAllUsers: () => {
        return userModel.findAll().then(result => {
            return result;
        })
    }

}