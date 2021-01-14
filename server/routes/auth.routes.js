const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')
const bcryptSalt = 10
const { check, validationResult } = require('express-validator')

const User = require('../models/user.model')

router.post('/signup',
    [
        check('username', 'Name should have min 3 characters.').isLength({ min: 3 }).custom(value => {
            return User.findOne({ username: value }).then(user => {
                if (user) { return Promise.reject('Username in use') }
            })
        }),

        check('email', 'Invalid email').isEmail().custom(value => {
            return User.findOne({ email: value }).then(user => {
                if (user) { return Promise.reject('Email in use') }
            })
        }),

        check('password', 'Password min 4 characters').isLength({ min: 4 })
    ],
    (req, res) => {
        const passCheck = validationResult(req)

        if (!passCheck.isEmpty()) {
            res.status(400).json({ message: passCheck.errors })
            return
        }

        const { username, password, email, origin, city, age, fullname, description, avatar } = req.body

        const salt = bcrypt.genSaltSync(bcryptSalt)
        const hashPass = bcrypt.hashSync(password, salt)

        User
            .create({ username, password: hashPass, email, origin, city, age, fullname, description, avatar })
            .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Login error' }) : res.status(200).json(newUser)))
            .catch(err => res.status(500).json({ message: err }))
    })

router.post('/login', (req, res, next) => {

    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            res.status(500).json({ message: 'Error authenticating user' });
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.logIn(theUser, err => err ? res.status(500).json({ message: 'Session error' }) : res.status(200).json(theUser))

    })(req, res, next)
})

router.post('/logout', (req, res) => {
    req.logout()
    res.status(200).json({ message: 'Log out success!' });
})

router.get('/loggedin', (req, res) => req.isAuthenticated() ? res.status(200).json(req.user) : res.status(403).json({ message: 'Unauthorized' }))



module.exports = router