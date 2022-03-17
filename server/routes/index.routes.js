const router = require("express").Router();

router.use("/phones", require('./phone.routes'))

module.exports = router;
