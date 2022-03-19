const router = require("express").Router();

router.use('/telefonos', require('./phone.routes'))
router.use('/users', require('./user.routes'))


module.exports = router;
