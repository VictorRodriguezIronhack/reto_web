const express = require('express')
const router = express.Router()
const Phone = require('../models/phone.model')

// Endpoints

router.get('/', (req, res) => {

    Phone
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ message: 'Error gettin phones from DB', err }))
})

router.get('/getOnePhone/:id', (req, res) => {
    
    Phone
        .findById(req.params.id)
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ message: 'Error gettin phone from DB', err }))
})

module.exports = router
