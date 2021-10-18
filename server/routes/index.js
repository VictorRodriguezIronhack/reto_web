const router = require('express').Router();
const multer = require('./../config/cloudinary-config');

router.get('/', (req, res, next) => {
	res.json('All good in here');
});

router.post('/upload', multer.single('file'), (req, res) => {
	console.log(req.file.path);

	res.json({ imageUrl: req.file.path });
});

module.exports = router;
