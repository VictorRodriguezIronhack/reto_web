const router = require("express").Router();
const data = require('../../phones.json')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/phones', (req, res) => res.json(data))

router.get('/phone/:id', (req, res) => {
  const { id } = req.params

  const onePhone = phone.filer(elm => elm.id === id)

  return res.json(onePhone)
})


module.exports = router;
