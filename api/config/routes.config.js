const express = require('express');
const router = express.Router();
const passport = require('passport');
const secure = require('../middlewares/secure.middleware');

const phones = require('../controllers/phones.controller');
const users = require('../controllers/users.controller');

router.get('/phones', phones.list);
router.post('/login', users.login)
router.post('/logout', users.logout)

router.post('/users', users.create);
router.get('/users/:id', secure.isAuthenticated, users.get);
router.delete('/users/:id', secure.isAuthenticated, users.delete);
router.patch('/users/:id', secure.isAuthenticated, users.update);

router.get('/users/:id/cart', secure.isAuthenticated, users.get);

router.get('/phones/:id', phones.get);
// router.post('/phones', secure.isAuthenticated, phones.create);
// router.delete('/phones/:id', secure.isAuthenticated, phones.delete);
// router.put('/phones/:id', secure.isAuthenticated, phones.update);

router.post('/totp', users.totp)

module.exports = router;