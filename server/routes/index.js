const router = require("express").Router();
const phones = require("../phones.json");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  res.json(phones);
});

router.get("/phones/:id", (req, res, next) => {
  const phoneId = Number(req.params.id);
  const findedPhone = phones.find((phone) => phone.id === phoneId);
  if(findedPhone){
    res.json(findedPhone);
  }else{
    res.status(404).send("Phone not found");
  }
});

module.exports = router;
