const router = require("express").Router();
const phones = require('./phones.routes')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
router.use('/telefonos', phones)

module.exports = router;
