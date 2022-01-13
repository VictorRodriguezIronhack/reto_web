const router = require("express").Router();
const phonesJSON = require("../../../phones.json");
router.get("/", (req, res, next) => {
  res.json(phonesJSON);
});
router.get("/:id", (req, res, next) => {
  const phonesJSON = [...phonesJSON].filter((phone) => phone.id == req.params.id);

  console.log(phonesJSON);
  return res.json(phoneDetail);
});

module.exports = router;
