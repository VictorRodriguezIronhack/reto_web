const express = require('express')
const router = express.Router()
const Phones = require('../models/phones.model')

router.get('/', (req, res) => {

    Phones
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.get('/detalles/:id', (req, res) => {

    Phones
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })

})

module.exports = router