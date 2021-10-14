const express = require("express")
const router = express.Router()
const phones = require('../../phones.json')

router.get('/', (req, res) => {

    res.json(phones)

})

module.exports = router