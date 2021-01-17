const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Phone = require('../models/Phone.model')
const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.status(403).json({ message: 'Desautorizado' })

router.get('/phones', (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/new', ensureAuthenticated, (req, res) => {

    const { name, manufacturer, description, color, price, image, screen, processor, ram } = req.body

    if (req.isAuthenticated() === true) {

           Phone
        .create({ name, manufacturer, description, color, price, image, screenSize: screen, processor, ram })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
        
    }
    else {
        console.log("no estas logueado")

    }
 


})

router.get('/getOnePhone/:phone_id', (req, res) => {
    console.log("hola")
    console.log(req.params)
    if (!mongoose.Types.ObjectId.isValid(req.params.phone_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Phone
        .findById(req.params.phone_id)
        .populate('room')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router
