const express = require("express");
const router = require("express").Router()
const Phones = require("../phones.json");

router.get("/telefonos", (req, res) => {
  res.json(Phones);
});

router.get("/details/:id", (req, res) => {
  const { id } = req.params;
  const [details] = Phones.filter((elm) => elm.id == id)
  res.status(200).json(details)
});

module.exports = router;
