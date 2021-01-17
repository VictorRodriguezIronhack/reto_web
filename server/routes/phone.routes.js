const express = require('express')
const router = express.Router()

const {checkId} = require('../middlewares/id-validation')

const Phone = require('../models/phone.model')

router.get('/allPhones', (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/onePhone/:id', checkId, (req, res) => {
  
    Phone
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newPhone', (req, res) => {
    
    Phone
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editPhone/:id', (req, res) => {

    Phone
        .findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deletePhone/:id', (req, res) => {
    
    Phone
        .findByIdAndRemove(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router