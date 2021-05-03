const createError = require('http-errors');
const Phone = require('../models/phone.model');

module.exports.list = (req, res, next) => {
    Phone.find()
        .then(phones => res.json(phones))
        .catch(next)
}

module.exports.create = (req, res, next) => {
    Phone.create(req.body)
        .then(phone => res.status(201).json(phone))
        .catch(next)
}