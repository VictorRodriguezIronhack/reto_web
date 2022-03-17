const router = require("express").Router();
const data = require("../data/phones.json");

router.get("/", (req, res) => {
  res.json(data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const phone = data.find((item) => item.id === Number(id));
  res.json(phone);
});

module.exports = router;
