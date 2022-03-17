const router = require("express").Router();

router.use("/telefonos", require('./product.routes'));

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
