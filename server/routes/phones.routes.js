const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Phone = require('../models/phone.model')



router.get('/getAllPhones', async (req, res) => {

    try {
        const phones = await Phone.find()
        res.json(phones)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }

})


router.get('/getOnePhone/:phone_id', async (req, res) => {

    try {
        const phone = await Phone.findById(req.params.phone_id)
        res.json(phone)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }

})



module.exports = router