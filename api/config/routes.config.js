const express = require('express');
const router = express.Router();
const phones = require('../controllers/phone.controller');
const users = require('../controllers/user.controller');
const phonesMid = require('../middlewares/phones.middleware');
const usersMid = require('../middlewares/users.middleware');
const secure = require('../middlewares/secure.middleware');


//PHONES

router.post('/telefonos', secure.isAuthenticated, phones.create);
router.get('/telefonos', secure.isAuthenticated, phones.list);
router.get('/telefonos/:phoneId', secure.isAuthenticated, phonesMid.phoneExists, phones.get);
router.put('/telefonos/:phoneId', secure.isAuthenticated, phonesMid.phoneExists, phones.update);
router.delete('/telefonos/:phoneId', secure.isAuthenticated, phonesMid.phoneExists, phones.delete);

//USERS

router.get('/users', secure.isAuthenticated, secure.checkRole('admin'), users.list);
router.post('/users', users.create);
router.get('/users/:id', usersMid.userExists, secure.isAuthenticated, users.get);
router.delete('/users/:id', usersMid.userExists, secure.isAuthenticated, users.delete);
router.post('/login', users.login);
router.post('/logout', secure.isAuthenticated, users.logout);
router.get('/activate', users.activate);

module.exports = router;