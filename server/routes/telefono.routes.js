const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Phone = require('../models/phone.model')


// ----- ENDPOINTS TELEFONOS -----


// Muestra la lista de todos los telefonos
router.get('/', (req, res) => {
    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// Muestra los detalles de un telefono
router.get('/:phone_id', (req, res) => {

    const phone_id = req.params.phone_id

    Phone
        .find({ id: phone_id })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



module.exports = router
