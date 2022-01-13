const router = require("express").Router();
const Phone = require("../models/Phone.model");

router.get("/", (req, res) => {
    Phone.find()
        .then(allPhones => res.json(allPhones))
        .then(console.log(">>>>>>>>>>>>>>>>>>>>>>PHONES"))
        .catch(err => res.json({err, errMessage: "Phones not found"}));
});

router.get("/:id", (req, res) => {
    const {id} = req.params

    Phone.findById(id)
        .then(theFilm => res.json(theFilm))
        .catch(err => res.json({err, errMessage: "Phone not found"}))
});

module.exports = router;