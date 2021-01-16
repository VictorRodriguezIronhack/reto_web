const express = require('express')
const router = express.Router()


const Phones = require('./../models/phone.model')

// Endpoints


router.get('/telefonos', (req, res) => {

    Phones
        .find()
        .then(allPhones => res.json(allPhones))
        .catch(err => res.status(500).json(err))

})


router.get('/telefonos/:id', (req, res) => {

    const phoneId = req.params.id

    console.log(req.params.id)

    Phones
        .findById(req.params.id)
        .then(Phone => res.json(Phone))
        .catch(err => res.status(500).json(err))

})


module.exports = router
