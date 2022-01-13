const router = require('express').Router()
const data = require('../phones.json')

router.get('/', (req, res) => {
  res.status(200).json(data)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const phone = data.filter((elm) => elm.id == id)
  res.status(200).json(phone)
})
