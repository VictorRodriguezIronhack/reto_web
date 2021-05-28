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

router.get('/telefonos/:id', (req, res, next) => {
  Phones.findOne({id:req.params.id})
  .then((result) => {
    console.log(result)
    res.send(result)
  }).catch((err) => {
    console.log(err)
  });
});

module.exports = router;