const Phone = require('../models/phone.model');
const createError = require("http-errors");

module.exports.phoneExists = (req, res, next) => {
    const phoneId = req.params.phoneId || req.params.id;
    Phone.findById(phoneId)
        .then((phone) => {
            if (!phone) next(createError(404, "Phone not found"));
            else {
                req.foundPhone = phone;
                next();
            }
        })
        .catch(next);
};