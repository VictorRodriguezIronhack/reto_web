const express = require('express')
const router = express.Router()
const phones = require('./../data/phones.json')

router.get('/', (req, res) => {
    res.status(200).json(phones)
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    const singlePhone = phones.filter(elm => {
        return elm.id == id
    })
    
    res.status(200).json(singlePhone)
})

module.exports = router
