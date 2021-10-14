const router = require("express").Router();

const phonesroutes = require('./phones.routes')


router.use('/telefonos', phonesroutes)

module.exports = router;
