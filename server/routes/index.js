const router = require('express').Router()

router.use('/telefonos', require('.phones.routes'))

module.exports = router
