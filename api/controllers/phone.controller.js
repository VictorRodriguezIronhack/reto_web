const createError = require('http-errors');
const Phone = require('../models/phone.model');


module.exports.create = (req, res, next) => {
    Phone.create(req.body)
        .then(phone => res.status(201).json(phone))
        .catch(next)
};

module.exports.list = (req, res, next) => {
    Phone.find()
        .populate('opinions')
        .then(phones => res.status(200).json(phones))
        .catch(next)
};

module.exports.get = (req, res, next) => res.json(req.foundPhone);


module.exports.update = (req, res, next) => {
    if (req.file) {
        req.body.image = req.file.path
    }

    Object.assign(req.foundPhone, req.body);
    req.foundPhone
        .save()
        .then((phone) => res.json(phone))
        .catch(next);
};

module.exports.delete = (req, res, next) => {
    req.foundPhone
        .delete()
        .then(() => res.status(204).end())
        .catch(next)
}