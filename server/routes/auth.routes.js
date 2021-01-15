const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const authController = require('../controllers/authController')

router.post('/signup',
    [
        check('username', 'Name should have min 3 characters.').isLength({ min: 3 }),

        check('email', 'Invalid email').isEmail(),

        check('password', 'Password min 4 characters').isLength({ min: 4 })
    ],
    authController.createUser
)

router.post('/login', authController.loginUser)

router.post('/logout', authController.logoutUser)

router.get('/loggedin', authController.loggedInUser)



module.exports = router