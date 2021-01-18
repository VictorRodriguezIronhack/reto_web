const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') //duda 
// const { checkId } = require('./middlewares')

const Telephone = require('../models/Telephone.model') //duda


router.get('/getAllTelephones', (req, res) => {

    Telephone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOneTelephone/:telephone_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.telephone_id)) {
        console.log(mongoose.Types.ObjectId.isValid(req.params.telephone_id))
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Telephone
        .findById(req.params.telephone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// router.post('/newTelephone', (req, res) => {

//     Telephone
//         .create(req.body)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })

// router.put('/editTelephone/:telephone_id', (req, res) => {

//     Telephone
//         .findByIdAndUpdate(req.params.telephone_id, req.body, { new: true })
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })

// router.delete("/deleteTelephone/:telephone_id", (req, res) => {

//     Telephone
//         .findByIdAndDelete(req.params.telephone_id)
//         .then(data => res.status(200).json(data))
//         .catch(err => res.status(500).json({ message: 'Not possible to delete' }))
// })

module.exports = router