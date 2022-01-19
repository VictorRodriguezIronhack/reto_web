const router = require("express").Router();
const Phones =require("../phones.json")

router.get("/", (req, res, next) => {
    res.json(Phones);
});

router.get("/details/:id", (req, res, next) => {
    const {id} = req.params;
    const [details] = Phones.filter((elm) => elm.id == id);
    res.json(details);
});


module.exports = router;

