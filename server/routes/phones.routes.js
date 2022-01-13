const router = require("express").Router();
const phones = require("../../phones.json");

router.get('/', (req, res) => {
	res.status(200).json(phones);
});

module.exports = router;