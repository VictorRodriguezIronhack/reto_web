const express = require('express')
const router = express.Router()


const Phones = require('./../models/phone.model')

// Endpoints
router.get('/', (req, res) => res.json({ message: "Not a valid endpoint" }))


router.get('/telefonos', (req, res) => {

    Phones
        .find()
        .then(allPhones => res.json(allPhones))
        .catch(err => res.status(500).json(err))

})


module.exports = router
