const express = require('express');
const router  = express.Router();
const phones = require('../phones.json');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/telefonos', (req, res)=>{
  res.send(phones);
});

router.get('/telefonos/:id', (req, res)=>{
  const id = req.params.id;
  const single = phones.filter((phone)=>{
    return phone.id == id
  })
  res.send(single[0]);
});

module.exports = router;
