const express = require("express")
const telefonos = require("./../data/phones.json")
const router = express.Router()

//get all phones 

router.get("/", (req, res) => {
    res.json(telefonos)
})

//get one phone

router.get("/:id", (req, res) => {
    const {id} = req.params
    const phone = telefonos.find((phn) => phn.id == id)
    res.json(phone)
})


module.exports = router;