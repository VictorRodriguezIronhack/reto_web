const { response } = require('express')
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

router.post('/newPhone', (req, res) => {
    const newPhone = {...req.body}
    
    Phone
        .create(newPhone)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ message: 'Error saving phone into DB', err }))
})

router.put('/editPhone/:id', (req, res) => {

    Phone
        .findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ message: 'Error editing phone in DB', err }))
})

router.delete('/deletePhone/:id', (req, res) => {

    Phone
        .findByIdAndRemove(req.params.id)
        .then(response => response ? res.json({status: 200, message: 'Phone deleted succesfully'}) : res.json({status: 404, message: 'Phone not found'}))
        .catch(err => res.status(500).json({ message: 'Error removing phone from DB', err }))
})

module.exports = router
