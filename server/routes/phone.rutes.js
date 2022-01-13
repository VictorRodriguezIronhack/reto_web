const router = require("express").Router();
const Phones = require("../phones.json");

router.get("/", (req, res) => {
  Phones.find()
    .then((allPhones) => res.json(allPhones))
    .catch((err) => console.log(err));
});

module.exports = router;
