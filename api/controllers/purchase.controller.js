const Purchase = require('../models/purchase.model');
const mailer = require('../config/mailer.config');
const User = require('../models/user.model');

module.exports.create = (req, res, next) => {
    const { price, products } = req.body;
    Purchase.create({
        products: products,
        total: price,
        owner: req.user.id,
    })
        .then(purchase => {
            res.status(201).json(purchase)
            User.findById(purchase.owner)
                .then(owner => {
                    mailer.purchase(
                        owner.email,
                        owner.name,
                        price,
                        products
                    )
                })

        })

        .catch(next)
};