const phones = require("../phones.json")

const router = require("express").Router();


router.get("/telefonos", (req, res, next) => {
  


  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

res.json(phones)

});

module.exports = router;
