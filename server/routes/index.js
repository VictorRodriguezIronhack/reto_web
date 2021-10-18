const router = require("express").Router();
const phoneRouter = require('./phone.routes')
const authRouter = require('./auth.routes')

router.use('/phone', phoneRouter)
router.use("/auth", authRouter)

module.exports = router;
