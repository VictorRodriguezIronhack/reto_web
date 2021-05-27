const express = require('express');
const router = express.Router();
// const phones = require('../bin/seeds.json');
const Phone = require('../models/Phone.model');

router.get('/', (req, res, next) => {
  Phone.find()
    .then((phones) => res.status(200).json(phones))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Phone.findById(id)
    .then((phone) => res.status(200).json(phone))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
