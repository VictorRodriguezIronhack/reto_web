const express = require('express')
const router = express.Router()
const Phone = require('../models/phone.model')

// Get All Phones
router.get('/', (req, res) => {
    Phone
    .find()
    .then(response=> res.json(response))
    .catch(err=>res.status(500).json({code: 500, message: 'Error loading phones', err}))
})

// Get All Phones
router.get('/details/:phone_id', (req, res) => {

    Phone
        .findById(req.params.phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading phone', err }))
})


module.exports = router
