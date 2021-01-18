const express = require('express')
const router = express.Router()
const data = require('../JSON/phones.json')

// Endpoints
router.get('/telephones', (req, res) => res.json(data))

module.exports = router
