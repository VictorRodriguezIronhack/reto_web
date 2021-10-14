const router = require("express").Router();

/* GET home page */
router.use("/phones", require('./phone.routes'))

module.exports = router;
