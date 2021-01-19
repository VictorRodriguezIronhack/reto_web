const express = require("express")
const router = express.Router()
const passport = require("passport")
const bcrypt = require("bcryptjs")

const User = require("../models/user.model")

router.post('/signup', (req, res) => {

    const { username, password, name, birthday, gender, role, imageUrl, description } = req.body

    if (!username || !password) {
        res.status(400).json({ message: 'Rellena todos los campos' })
        return
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Contraseña insegura' })
        return
    }

    User
        .findOne({ username })
        .then(foundUser => {
            if (foundUser) {
                res.status(400).json({ message: 'El usuario ya existe' })
                return
            }

            const salt = bcrypt.genSaltSync(10)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass, name, birthday, gender, role, imageUrl, description })
                .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Error en login' }) : res.status(200).json(newUser)))
                .catch(() => res.status(500).json({ message: 'Error al guardar el usuario en la Base de Datos' }))
        })
})


router.post('/login', (req, res, next) => {

    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            res.status(500).json({ message: 'Error al autentificar al usuario' });
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.login(theUser, err => err ? res.status(500).json({ message: 'Error de conexión de sesión' }) : res.status(200).json(theUser))

    })(req, res, next)
})



router.post('/logout', (req, res) => {
    req.logout()
    res.status(200).json({ message: 'Sesión cerrada con éxito' });
})


router.get('/loggedin', (req, res) => req.isAuthenticated() ? res.status(200).json(req.user) : res.status(403).json({ message: 'Usuario no autorizado' }))



module.exports = router