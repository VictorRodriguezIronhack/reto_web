const express = require('express');
const router = express.Router();
const passport = require('passport');
const phones = require('../controllers/phone.controller');
const users = require('../controllers/user.controller');
const phonesMid = require('../middlewares/phones.middleware');
const usersMid = require('../middlewares/users.middleware');
const secure = require('../middlewares/secure.middleware');
const storageUsers = require('./storageUsers.config');
const opinions = require('../controllers/opinion.controller');
const purchase = require('../controllers/purchase.controller');
const GOOGLE_SCOPES = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
]


//PHONES

router.post('/telefonos', secure.isAuthenticated, phones.create);
router.get('/telefonos', phones.list);
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
router.patch('/users/:id', secure.isAuthenticated, usersMid.userExists, storageUsers.single("avatar"), users.update);
router.post('/telefonos/:phoneId/opinion', secure.isAuthenticated, phonesMid.phoneExists, opinions.create);
router.post('/purchase', secure.isAuthenticated, purchase.create);
router.get('/authenticate/google', passport.authenticate('google-auth', { scope: GOOGLE_SCOPES }));
router.get('/authenticate/google/cb', users.loginWithGoogle);

router.use((req, res, next) => {
    next(createError(404, 'Route not found'));
});

module.exports = router;