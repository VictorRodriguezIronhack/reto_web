const router = require('express').Router()
const Phone = require('../models/Phone.model')

router.get('/', (req, res) => {
  Phone.find()
    .sort({ name: -1 })
    .then((allPhones) => res.status(200).json(allPhones))
    .catch((err) => res.status(500).json({ err, message: err.message }))
})

router.get('/details/:id', (req, res) => {
  const { id } = req.params

  Phone.find({ id: id })
    .then((thePhone) => res.status(200).json(thePhone))
    .catch((err) => res.status(500).json({ err, message: err.message }))
})

module.exports = router
