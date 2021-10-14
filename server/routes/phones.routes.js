const Phones = require("./../phones.json");
const router = require("express").Router();

router.get("/", (req, res) => res.json(Phones))

router.get("/:id", (req,res ) => {

    const {id} = req.params

    const phone = Phones.filter(elm => elm.id == id)

    return res.json(phone[0])
})

module.exports = router;