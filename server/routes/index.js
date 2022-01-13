const router = require('express').Router()

router.use('/telefonos', require('./phone.routes'))

module.exports = router
