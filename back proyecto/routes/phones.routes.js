const express = require('express')
const router = express.Router()

const { checkIdFormat } = require('../middlewares/middleware')

const Phone = require('../models/phone.model')

router.get('/allPhones', checkIdFormat, (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
    
})


router.get('/onePhone', checkIdFormat, (req, res) => {

    Phone
    .findById()
})



// router.post('/giveRating', (req, res) => {

//     const { raterId, ratedId, ratingValue, ratingComment } = req.body

//     Rating
//         .create({ rater: raterId, rated: ratedId, value: ratingValue, comment: ratingComment })
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })

// router.put('/editOneRating/:id', checkIdFormat, (req, res) => {

//     Rating
//         .findByIdAndUpdate(req.params.id, req.body)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })

// router.delete('/deleteRating/:id', checkIdFormat, (req, res) => {

//     Rating
//         .findByIdAndDelete(req.params.id)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })


module.exports = router