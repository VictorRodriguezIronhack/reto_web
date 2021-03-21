const express = require('express')
const router = express.Router()

const phonesApi = require('../../phones.json')

//Endpoints

router.get('/list', (req, res) => {
    res.json(phonesApi)
})

router.get('/:_id', (req, res) => {
    const phone = phonesApi.find(phone => phone.id === req.params.id)
    res.json({ phone })
})


module.exports = router;