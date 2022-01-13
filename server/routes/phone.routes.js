const router = require("express").Router()
const Phone = require("../reto_web/phones.json")


router.get("/telefonos", (req, res) => {
    res.json(Phone)
})


module.exports = router