const router = require("express").Router();
const Phones = require("../phones.json")



router.get("/", (req, res, next) => {
    Phones.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.status(500).json({ err, errMessage: "Error looking for all products" }))
});

// router.get("/", (req, res, next) => {
//     res.json(data)
//  });
 

module.exports = router;

