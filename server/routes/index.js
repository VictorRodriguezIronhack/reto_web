const router = require("express").Router();

const phoneController = require("../controllers/phones");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//Phones
router.get("/telefonos", phoneController.getPhones);

module.exports = router;
