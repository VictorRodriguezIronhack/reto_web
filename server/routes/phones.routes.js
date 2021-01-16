const express = require('express')
const router = express.Router()
const PhonesController = require('../controllers/phonesControllers')

router.get('/getall', PhonesController.getAll)

router.get('/getone/:phone_id', PhonesController.getOne)

router.put('/addToWishList/:user_id/:phone_id', PhonesController.addPhone)

router.delete('/removeFromWishList/:user_id/:phone_id', PhonesController.removePhone)

module.exports = router