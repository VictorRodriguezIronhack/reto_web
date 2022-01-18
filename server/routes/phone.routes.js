const router = require("express").Router();
const Phones = require("../phones.json");

router.get("/", (req, res, next) => {
  res.json(Phones);
});

router.get("/details/:id", (req, res) => {
  const { id } = req.params;
  console.log("en las rutas", id);
  const [details] = Phones.filter((elm) => elm.id == id);
  res.status(200).json(details);
});

module.exports = router;
