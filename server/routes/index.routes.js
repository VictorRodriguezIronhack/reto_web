const router = require("express").Router();

const data = require("../../phones.json");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/telefonos", (req, res, next) => {
  //console.table(data)
  console.log('im here!');
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(data);
  console.log('done!');
});

module.exports = router;
