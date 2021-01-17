const express = require('express')
const router = express.Router()
const Phone = require('./../models/phone.model')
const { checkId } = require('./middlewares')

router.get('/getAllPhones', (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOnePhone/:phone_id', (req, res) => {

    Phone
        .findById(req.params.phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newPhone', (req, res) => {

    Phone
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editPhone/:phone_id', (req, res) => {

    Phone
        .findByIdAndUpdate(req.params.phone_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deletePhone/:phone_id', (req, res) => {

    Phone
        .findByIdAndDelete(req.params.phone_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router