const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const phones = require ('../../phones.json')

router.get("/telefonos", (req, res ) => {
  res.json(phones)
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
