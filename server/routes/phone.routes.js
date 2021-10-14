const router = require('express').Router();

//require phone model
const Phone = require('../models/Phone.model');

router.get('/telefonos', (req, res, next) => {
	Phone.find()
		.then((phones) => {
			res.json(phones);
			//console.log(phones);
		})
		.catch((err) => res.json(err));
});

module.exports = router;

//  GET /api/telefonos/:phoneid -  Retrieves a specific phoneid by id
router.get('/telefonos/:phoneid', (req, res, next) => {
	const { phoneid } = req.params;

	Phone.findById(phoneid).then((phone) => res.status(200).json(phone)).catch((error) => res.json(error));
});
