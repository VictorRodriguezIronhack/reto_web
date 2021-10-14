const express = require('express')
const router = express.Router()

const data = require('../../phones.json')

router.get('/', (req, res) => {
    res.send(data)
})

module.exports = router