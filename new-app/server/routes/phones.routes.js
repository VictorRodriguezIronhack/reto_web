const router = require("express").Router()
const phones = require('../phones.json')


router.get('/', (req, res) => {
  res.status(200).json(phones)
})


router.get('/:id', (req, res) => {
  const { id } = req.params
  const [phone] = phones.filter(phone => phone.id == id)
  res.status(200).json(phone)
})


module.exports = router
