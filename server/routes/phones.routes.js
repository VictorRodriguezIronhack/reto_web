const express = require('express')
const router = express.Router()
const PhonesData = require('../../phones.json')

router.get('/getall', (req, res) => res.json(PhonesData))

router.get('/getone/:id', (req, res) => {
    const phone = PhonesData.find(elm => elm.id === parseInt(req.params.id))
    res.json(phone)
})

module.exports = router