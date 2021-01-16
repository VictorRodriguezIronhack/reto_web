const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Mobile = require('../models/mobile.model')


router.get('/', (req, res) => {

    Mobile
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/modelo/:mobile_id', (req, res) => {

    Mobile
        .findById(req.params.mobile_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
    

module.exports = router