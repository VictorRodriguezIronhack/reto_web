const router = require("express").Router();
const Phone = require("../models/Phone.model");

router.get("/telephones", (req, res) => {
    res.json(
        {
            "hola": "mundo"
        }
    )
    // Phone.find()
    //     .then(allPhones => res.json(allPhones))
    //     .then(console.log("holi------"))
    //     .catch(err => res.json({err, errMessage: "Phones not found"}));
});

module.exports = router;