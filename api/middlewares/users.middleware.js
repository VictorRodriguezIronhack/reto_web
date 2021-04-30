const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.userExists = (req, res, next) => {
    const userId = req.params.userId || req.params.id;
    User.findById(userId)
        .then(user => {
            if (!user) next(createError(404, 'User not found'))
            else {
                req.foundUser = user;
                next()
            }
        })
        .catch(next);
}