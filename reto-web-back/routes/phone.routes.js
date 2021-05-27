const express = require('express');
const router  = express.Router();
const Phones = require('../models/Phones.model');

/* GET phones */
router.get('/telefonos', (req, res, next) => {
  Phones.find()
  .then((result) => {
    console.log(result)
    res.send(result)
  }).catch((err) => {
    console.log(err)
  });
});

module.exports = router;