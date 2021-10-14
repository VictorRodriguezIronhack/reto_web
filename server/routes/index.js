const router = require("express").Router();
const data = require('../../phones.json')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/phones', (req, res) => res.json(data))


module.exports = router;
