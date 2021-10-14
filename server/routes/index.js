const router = require("express").Router();

const telefonoRouter = require("./telefono.routes")


router.use("/telefonos", telefonoRouter )

module.exports = router;
