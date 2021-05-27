const express = require('express')
const router = express.Router()

const Phone = require('../models/Phone.model')

router.get('/telefonos', (req, res, next) => {
    Phone.find()
      .then((result) => {
        res.send(result)
      })
      .catch((error) => {
        console.log(error)
      })
  })
  router.get('/telefonos/:id', (req, res, next) => {
    console.log(req.params)
    Phone.find()
      .then((result) => {
        res.send(result)
      })
      .catch((error) => {
        console.log(error)
      })
  })
  

  module.exports = router