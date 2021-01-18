const express = require('express')
const router = express.Router()


const Phones = require('./../models/phone.model')



// AllPhones

router.get('/telefonos', (req, res) => {

    Phones
        .find()
        .then(allPhones => res.json(allPhones))
        .catch(err => res.status(500).json(err))

})

//Add new phone
router.post('/new', (req, res) => {

    Phones
        .create(req.body)
        .then(newPhone => res.json(newPhone))
        .catch(err => res.status(500).json(err))
})


//Phone Details
router.get('/telefonos/:id', (req, res) => {

    const phoneId = req.params.id

    console.log(req.params.id)

    Phones
        .findById(req.params.id)
        .then(Phone => res.json(Phone))
        .catch(err => res.status(500).json(err))

})

//Edit phone

router.put('/edit/:id', (req, res) => {

    const phoneId = req.params.id

    console.log(req.params.id)

    Phones
        .findByIdAndUpdate(req.params.id, req.body)
        .then(Phone => res.json(Phone))
        .catch(err => res.status(500).json(err))

})
//Delete phone

router.post('/delete/:id', (req, res) => {

    Phones
        .findByIdAndDelete(req.params.id)
        .then(Phone => res.json(Phone))
        .catch(err => res.status(500).json(err))

})


module.exports = router
