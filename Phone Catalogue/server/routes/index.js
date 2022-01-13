const router = require("express").Router();

const fs = require("fs");


router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res) =>{
  const fs = require("fs");
  const path = require("path");
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../../client/public/phones.json"));
  let phoneData = JSON.parse(rawdata);
  res.json(phoneData)
  
})

module.exports = router;
