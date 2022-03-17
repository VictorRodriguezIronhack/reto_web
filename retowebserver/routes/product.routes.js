const router = require("express").Router()
const Product = require('../models/Product.model')


router.get("/getAllProducts", (req, res) => {

    Product
        .find()
        .select('name description imageUrl')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneProduct/:product_id', (req, res) => {
    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

module.exports = router


