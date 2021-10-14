const router = require("express").Router();

const phonesRouter = require("./phones.routes");
router.use("/telefonos", phonesRouter);

module.exports = router;