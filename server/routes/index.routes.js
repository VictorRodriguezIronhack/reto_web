const router = require("express").Router();
const data = require('../../phones.json')

router.get("/", (req, res) => res.json("All good in here"))
router.get("/telefonos", (req, res) => res.json(data))

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
