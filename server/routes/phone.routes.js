const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Phone = require('../models/phone')

router.get('/phones', (req, res) => {
    Phone
        .find()
        .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err))
})

router.get('/phone/:phone_id', (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.phone_id)) {
        res.status(404).json({message: 'Invalid ID'})
    }

    Phone
        .findById(req.params.phone_id)
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
    
})

module.exports = router