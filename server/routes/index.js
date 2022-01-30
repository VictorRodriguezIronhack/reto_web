const router = require("express").Router();
const phoneRoute = require("./phone.routes");

router.use("/telefonos", phoneRoute);

module.exports = router;

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
