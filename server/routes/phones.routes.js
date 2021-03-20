const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Phone = require('../models/PhoneModel')



//Show one phone

router.get('/onePhone/:phone_Id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.phone_Id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Phone
        .findById(req.params.phone_Id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



//Show all the phones of the list

router.get('/phones', (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => {
            res.status(500).json(err)
        })
})



//Edit phone

router.patch('/editPhone/:phone_Id', (req, res) => {

    Phone
        .findByIdAndUpdate(req.params.phone_Id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



//Delete phone

router.delete('/deletePhone/:phone_Id', (req, res, next) => {

    const phone_Id = req.params.phone_Id

    Phone
        .findByIdAndDelete(phone_Id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router