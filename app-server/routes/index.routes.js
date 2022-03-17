const router = require("express").Router();
const Phone = require("../models/Phone.model");


router.get("/", (req, res, next) => {
  res.json("All good in here");
});



router.get('/telefonos', (req, res) => {

  Phone
    .find()
    .select('name image manufacturer imageFileName price id')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})



router.get('/telefonos/:phone_id', (req, res) => {
  const { phone_id } = req.params

  Phone
    .findById(phone_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

module.exports = router;
