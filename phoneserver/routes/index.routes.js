const router = require("express").Router();
const telephones = require("../phoneData/phones.json") 

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/telefonos", (req, res) => {
  res.send(telephones)
})



// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
