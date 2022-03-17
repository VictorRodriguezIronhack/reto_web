const router = require("express").Router()

router.use("/telefonos", require("./phones.route"))


module.exports = router