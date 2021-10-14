const router = require("express").Router();
const phoneRouter = require('./phone.routes')

router.use('/phone', phoneRouter)

module.exports = router;
