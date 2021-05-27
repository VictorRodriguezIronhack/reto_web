const express = require('express')
const router = express.Router()

const phones = require('./../phones.json')

// List of phones
router.get('/telefonos', (req, res) => res.json(phones))


// Details of a phone
router.get('/detalles/:phoneId', (req, res) => {
    const { phoneId } = req.params

    phones.forEach(phone => {
        if (phone.id == phoneId) {
            res.json(phone)
        }
    })
})


module.exports = router