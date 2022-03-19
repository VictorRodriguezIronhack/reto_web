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


// //ADD PRODUCT TO USER-CART
// router.put('/cart/addProduct/:product_id', isAuthenticated, (req, res) => {
//     const { product_id } = req.params
//     const { _id } = req.payload

//     Product
//         .findById(product_id)
//         .then(foundProduct => User.findByIdAndUpdate(_id, { $push: { productsCart: { product: foundProduct } } }, { new: true }))
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })


// // REMOVE PRODUCT FROM USER-CART
// router.put('/cart/removeProduct/:product_id', isAuthenticated, (req, res) => {
//     const { product_id } = req.params
//     const { _id } = req.payload

//     Product
//         .findById(product_id)
//         .then(foundProduct => User.findByIdAndUpdate(_id, { $pull: { productsCart: { product: foundProduct } } }, { new: true }))
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })

// //GET PRODUCT FROM USER-CART
// router.get('/cart/getCartProducts', isAuthenticated, (req, res) => {
//     //const { product_id } = req.params
//     const { _id } = req.payload

//     User
//         .findById(_id)
//         .select('productsCart')
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })


module.exports = router