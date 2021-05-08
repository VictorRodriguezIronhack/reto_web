const createError = require('http-errors');
const Phone = require('../models/phone.model');

module.exports.list = (req, res, next) => {

    const criteria = req.query;

    Phone.find(criteria)
        .then(phones => res.json(phones))
        .catch(next)
}

module.exports.get = (req, res, next) => {
    Phone.findById(req.params.id)
        .then(phone => {
            if (phone) res.json(phone)
            else next(createError(404, 'Phone not found'))
        })
        .catch(next)
}