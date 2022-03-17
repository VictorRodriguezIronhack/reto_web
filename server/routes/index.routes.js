const router = require("express").Router();

const data = require("../../phones.json");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/telefonos", (req, res, next) => {
  res.json(data);
});

module.exports = router;
