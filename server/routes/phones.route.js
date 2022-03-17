const router = require("express").Router()
const Phones = require("../phones.json")

router.get("/getAllPhones", (req, res) => {
    Phones
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/getOnePhone/:id", (req, res) => {
    const { id } = req.params

    Phones
        .findById(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router