const Phone = require('../models/phone.model');
const createError = require("http-errors");

module.exports.phoneExists = (req, res, next) => {
    const phoneId = req.params.phoneId || req.params.id;
    Phone.findById(phoneId)
        .populate({
            path: "opinions",
            options: { sort: { 'createdAt': -1 } },
            populate: {
                path: "owner",
                model: "User"
            },
        })
        .then((phone) => {
            if (!phone) next(createError(404, "Phone not found"));
            else {
                req.foundPhone = phone;
                next();
            }
        })
        .catch(next);
};