const router = require("express").Router();
const phones = require("../phoneServer/phones.json")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
router.get("/phones/getAllPhones", (req, res, next) => {
  res.send(phones)
})


router.get("/phones/getOnePhone/:phone_id", (req, res, next) => {
  //lo qeu toque 
  //no te oigo
  
})
module.exports = router;
