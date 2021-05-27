const express = require('express')
const router = express.Router()

const Phone = require('../models/Phone.model')

router.get('/telefonos', (req, res, next) => {
    Phone.find()
      .then((result) => {
        console.log(result)
        res.send({data: result})
      })
      .catch((error) => {
        console.log(error)
      })
  })
  

  module.exports = router