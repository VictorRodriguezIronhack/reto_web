const router = require("express").Router();
const data = require('../../phones.json')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/phones', (req, res) => res.json(data))

router.get('/details/:id', (req, res) => {

  const { id } = req.params

  const onePhone = data.filter(elm => elm.id == id)
  return res.json(onePhone)

})


module.exports = router;
