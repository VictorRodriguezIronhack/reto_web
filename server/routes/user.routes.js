const express = require("express");
const router = express.Router();

const User = require('./../models/User.model')
const Cart = require('./../models/Cart.model')
const { handleMongoooseError, isValidIdFormat } = require('../utils/index')
const bcrypt = require("bcrypt")
const bcryptSalt = 10

// Signup (post)
router.post('/signup', (req, res) => {

    const { userName, email, password } = req.body
    User
        .findOne({ email })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'Email already exixts' })
                return
            }
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)
            User
                .create({ userName, email, password: hashPass })
                .then((createdUser) => Cart.create({ userId: createdUser._id, products: [], totalPrice: 0 }))
                .then(() => res.json({ code: 200, message: 'User created' }))
                .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', errors: handleMongoooseError(err) }))
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})


// Login
router.post('/login', (req, res) => {

    const { pwd, email } = req.body

    User
        .findOne({ email })
        .then(user => {

            if (!user) {
                res.status(401).json({ code: 401, message: 'Email not registered' })
                return
            }

            if (bcrypt.compareSync(pwd, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Incorrect password' })
                return
            }

            req.session.currentUser = user
            res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', errors: handleMongoooseError(err) }))
})



router.get('/logout', (req, res) => {
    req.session.destroy((err) => res.json({ message: 'Logout successful' }));
})



router.post("/isloggedin", (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

module.exports = router