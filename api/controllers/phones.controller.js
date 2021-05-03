const createError = require('http-errors');
const Phone = require('../models/phone.model');

module.exports.list = (req, res, next) => {

    // const criteria = req.query;
    // if(criteria.end && criteria.end != ''){
    //     criteria.end = {$lte: new Date(criteria.end)}
    // } else {
    //     delete criteria.end;
    // }
    // console.log(criteria);

    Phone.find(/*criteria*/)
        // .populate('idHost', '_id name email')
        .then(phones => res.json(phones))
        .catch(next)
}

module.exports.get = (req, res, next) => {
    Phone.findById(req.params.id)
        // .populate('idHost', '_id name email')
        .then(phone => {
            if (phone) res.json(phone)
            else next(createError(404, 'Phone not found'))
        })
        .catch(next)
}