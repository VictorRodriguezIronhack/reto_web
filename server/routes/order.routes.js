const express = require('express')
const router = express.Router()
const Order = require('../models/order.model')

// CREATE ORDER (POST)
router.post('/new', (req, res) => {
    const { product, quantity} = req.body
    Order
        .create({product, quantity})
        .then(response => res.json(response))
        .catch(err => { res.status(500).json({ code: 500, message: 'Could not create any order', err })})
})

module.exports = router