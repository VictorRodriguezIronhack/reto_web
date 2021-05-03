const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phones.controller');

router.get('/phones', phoneController.list);
router.post('/phone', phoneController.create);

module.exports = router;