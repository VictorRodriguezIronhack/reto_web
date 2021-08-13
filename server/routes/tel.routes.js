const express = require('express')
const router = express.Router()
const fs = require('fs')

const telePhones = require('../phones.json')



router.get('/', (req, res) => {

    res.json(telePhones)
        

})

router.get('/details/:phone_id', (req, res) => {

    const { phone_id } = req.params

    const data = telePhones.filter(elm => elm.id == phone_id)
    
    res.json(data)

})

module.exports = router