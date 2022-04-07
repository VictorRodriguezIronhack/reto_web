const router = require('express').Router()
const User = require('../models/User.model')

// GET ALL USERS
router.get('/getAllUsers', (req, res) => {

    User
        .find()
        .select('username userlastname email role phone')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


//GET ONE USER
router.get('/getOneUser/:user_id', (req, res) => {
    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


//EDIT USER
router.put('/edit/:user_id', (req, res) => {
    const { user_id } = req.params
    const { username, userlastname, email, phone } = req.body

    User
        .findByIdAndUpdate(user_id, { username, userlastname, email, phone }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


//DELETE
router.delete('/delete/:user_id', (req, res) => {
    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(res.json({ message: 'Usuario eliminado' }))
        .catch(err => res.status(500).json(err))
})


module.exports = router