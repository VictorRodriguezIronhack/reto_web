const router = require("express").Router();
const phones = require("../../phones.json")

router.get("/", (req, res, next) => {
  res.json("Home");
});

router.get("/phones", (req, res, next) => {
  res.status(200).json(phones)
});
// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
