const router = require("express").Router();
// const fetch = require('node-fetch')
const API = require('../../phones.json')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/telefonos', (req, res, next) => {
  res.json(API)
})

// // router.get('/telefonos/:id', (req, res, next) => {

// // })

module.exports = router;
