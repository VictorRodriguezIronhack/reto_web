const router = require("express").Router();
const phones = require('../phones.json')

/* GET home page */
router.get("/phones", (req, res, next) => {
  console.log('-------------')
  res.status(200).json({ phones: phones })
});

module.exports = router;
