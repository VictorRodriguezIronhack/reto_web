const express = require("express");
const router = express.Router();
const phone = require("../phones.json");

router.get("/", (req, res) => {
  res.json(phone);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  phone.json(id);
});

module.exports = router;
