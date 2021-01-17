const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Phone = require('../models/phone.model')

router.get('/phones', (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newPhone', (req, res) => {

    Phone
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/delete/:phone_id', (req, res) => {

    Phone
        .findByIdAndRemove(req.params.phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
    
})

router.get('/getOnePhone/:phone_id', (req, res) => {

    if(!mongoose.Types.ObjectId.isValid(req.params.phone_id)) {
        res.status(404).json({message: 'Invalid ID'})
    }

    Phone
        .findById(req.params.phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))  
})

router.put('/editPhone/:phone_id', (req, res, next) => {

    const { title, manufacturer, description, color, price, imageUrl, screenSize, processor, ramMemory, details } = req.body
    if (!title || !manufacturer || !description || !color || !price || !imageUrl || !screenSize || !processor || !ramMemory || !details) {
        res.status(404).json({ message: 'Invalid form' })
        return
    }

    Phone
        .findByIdAndUpdate(req.params.phone_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
    
})

module.exports = router