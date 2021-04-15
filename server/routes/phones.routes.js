const express = require('express')
const router = express.Router()
const Phone = require('./../models/phone.model')


// Endpoints
router.get('/allPhones', (req, res) => {

    Phone
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching phones', err }))
})

router.get('/onePhone/:phone_id', (req, res) => {

    Phone
        .findById(req.params.phone_id)
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching phones', err }))
})


router.post('/newPhone', (req, res) => {

    const phone = { ...req.body }

    Phone
        .create(phone)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving phones', err }))
})

router.put('/editPhone/:phone_id', (req, res) => {

    Phone
        .findByIdAndUpdate(req.params.phone_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing phones', err }))
})


router.delete('/deletePhone/:phone_id', (req, res) => {

    const phone_id = req.params.phone_id

    Phone
        .findByIdAndDelete(phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting phones', err }))
})


module.exports = router
