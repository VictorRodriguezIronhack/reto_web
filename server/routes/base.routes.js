const express = require('express')
const router = express.Router()

const phoneData = require("./../data/phones.json")

// Endpoints
router.get('/', (req, res) => res.json(phoneData))


module.exports = router
