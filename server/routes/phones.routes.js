const router = require("express").Router();
const PhoneModel = require("../models/Phone.model");

router.get('/', (req, res) => {
	
	PhoneModel.find({})
		.sort({ createdAt: -1 })
		.limit(20)
		.then(phones => res.status(200).json(phones))
		.catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {

	const { id } = req.params;
	PhoneModel.findById(id)
		.then(phone => res.status(200).json(phone))
		.catch(err => res.status(400).json(err));
});

module.exports = router;