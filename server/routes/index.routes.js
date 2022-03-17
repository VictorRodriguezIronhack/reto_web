const router = require("express").Router();
const phones = require("./../phones.json")


router.get("/telefonos", (req, res, next) => {
  res.json(phones)
})


module.exports = router
