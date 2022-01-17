const router = require('express').Router()
const data = require('../phones.json')

router.get('/', (req, res) => {
  res.status(200).json(data)
})

/* TODO: Chequear si el problema de la ruta de details viene de aqui.
Igual hay q ponerle /details/:id para no machacar el root */
router.get('/:id', (req, res) => {
  const { id } = req.params
  const [phone] = data.filter((elm) => elm.id == id)
  res.status(200).json(phone)
})

module.exports = router
