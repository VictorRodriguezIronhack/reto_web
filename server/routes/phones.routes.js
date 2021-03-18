const express = require('express')
const router = express.Router()

const Phone = require('../models/phone.model')
const phones = require("../API_content/phones.json")

// Endpoints
router.get('/', (req, res) => res.json(phones))

module.exports = router
