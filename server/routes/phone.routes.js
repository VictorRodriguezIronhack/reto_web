const express = require('express')
const router = express.Router()
const Phone = require('../models/phone.model')


// GET ALL PHONES
router.get('/', (req, res) => {
    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading phones', err }))
})

// GET A SPECIFIC PHONE THROUGH ITS ID
router.get('/:id', (req, res) => {
    Phone
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading phone', err }))
})

module.exports = router