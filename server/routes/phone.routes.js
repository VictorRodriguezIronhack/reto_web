const express = require("express");
const router = express.Router();
const phone = require('../phones.json')

router.get("/", (req, res) => {
    res.json(phone)
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const onePhone = phone.filter(elm => elm.id == id)
    return res.json(onePhone)
})

module.exports = router;