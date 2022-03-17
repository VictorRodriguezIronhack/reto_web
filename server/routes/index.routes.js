const router = require('express').Router();
const API = require('../../phones.json')

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.get('/telefonos', (req, res, next) => {
  res.json(API)
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
