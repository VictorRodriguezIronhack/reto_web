const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Telefono = require('../models/telefono.model')

router.get('/getAllPhones', (req, res) => {

    Telefono
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOnePhone/:phone_id', (req, res) => {

    if(!mongoose.Types.ObjectId.isValid(req.params.phone_id)){
        res.status(404).json({message: 'Invalid ID'})
        return
    }

    Telefono
        .findById(req.params.phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newPhone', (req, res) => {

    Telefono
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editPhone/:phone_id', (req, res) => {

    Telefono
        .findByIdAndUpdate(req.params.phone_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router