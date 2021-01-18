const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Phone = require('../models/phone')

//All phones
router.get('/listado', (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Phones details
router.get('/detalles/:phone_id', (req, res) => {
    
    console.log(req.params)

    Phone
        .findById(req.params.phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router