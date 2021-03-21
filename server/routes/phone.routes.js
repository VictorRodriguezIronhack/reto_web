const express = require('express')
const router = express.Router()
const phones = require("../../phones.json")


router.get('/telefonos', (req, res) => res.json(phones))


module.exports = router