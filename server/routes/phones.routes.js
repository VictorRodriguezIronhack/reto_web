const express = require('express')
const router = express.Router()

const phonesApi = require('../../phones.json')

//Endpoints

router.get('/list', (req, res) => {
    setTimeout(() => {
        res.json(phonesApi)
    }, 2000)
})

module.exports = router;