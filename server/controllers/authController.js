const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const bcryptSalt = 10
const passport = require('passport')
const { validationResult } = require('express-validator')

exports.createUser = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() })
    }

    try {

        const { username, password } = req.body

        const usernameUsed = await User.findOne({ username })

        if (usernameUsed) {
            return res.status(400).json({ message: 'Username in use' })
        }

        const salt = bcrypt.genSaltSync(bcryptSalt)
        const hashPass = bcrypt.hashSync(password, salt)

        const user = await User.create({ username, password: hashPass })

        req.login(user, err => err ? res.status(500).json({ message: 'Login error' }) : res.status(200).json(user))

    } catch (error) {
        console.log(error)
    }
}

exports.loginUser = (req, res, next) => {

    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            return res.status(500).json({ message: 'Error authenticating user' })
        }

        if (!theUser) {
            return res.status(401).json(failureDetails)
        }

        req.logIn(theUser, err => err ? res.status(500).json({ message: 'Session error' }) : res.status(200).json(theUser))

    })(req, res, next)

}

exports.logoutUser = (req, res) => {
    req.logout()
    res.status(200).json({ message: 'Log out success!' });
}

exports.loggedInUser = (req, res) => (
    req.isAuthenticated() ? res.status(200).json(req.user) : res.status(403).json({ message: 'Unauthorized' })
)