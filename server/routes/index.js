const router = require("express").Router();

//això va a http://localhost:5005/api
// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });


const telefonosRoutes = require('./telefonos.routes')
router.use('/', telefonosRoutes)



// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
