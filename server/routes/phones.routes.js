const express = require("express")
const telefonos = require("./../data/phones.json")
const router = express.Router()

//get all phones 

router.get("/", (req, res) => {
    res.json(telefonos)
})


module.exports = router;