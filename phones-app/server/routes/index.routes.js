const router = require("express").Router();
const phones =require("../phoneServer/phones.json")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
router.get("/phones",(req,res,next)=>{
  res.send(phones)
})

module.exports = router;
