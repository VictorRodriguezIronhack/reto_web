const router = require("express").Router()
const Phone = require("../models/Phone.model");


//GET ALL PHONES
router.get('/', (req, res) => {

    Phone
        .find()
        .select('name image manufacturer imageFileName price id')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//GET ONE PHONE
router.get('/:phone_id', (req, res) => {
    const { phone_id } = req.params

    Phone
        .findById(phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//CREATE PHONE

router.post('/create', (req, res) => {
    const { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body

    Phone
        .create({ id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//EDIT PHONE
router.put('/edit/:phone_id', (req, res) => {
    const { phone_id } = req.params
    const { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body

    Phone
        .findByIdAndUpdate(phone_id, { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//DELETE PHONE
router.delete('/delete/:phone_id', (req, res) => {
    const { phone_id } = req.params

    Product
        .findByIdAndDelete(phone_id)
        .then(res.json({ message: 'Producto eliminado' }))
        .catch(err => res.status(500).json(err))
})


module.exports = router