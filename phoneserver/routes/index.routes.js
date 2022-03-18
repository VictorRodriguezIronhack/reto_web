const phonelist = require("../db/reto_web/phones.json")
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/telefonos", (req, res, next) => {
  res.json(phonelist);
});




module.exports = router;
