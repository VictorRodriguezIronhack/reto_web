
const { response } = require("../app");
const router = require("express").Router();
const Phone= require('../models/Phone.model')

router.get("/getAllPhones",(req,res,next)=>{
Phone
.find()
.select('name,manufacturer,description,color,price,imagenFileName,processor,screen,ram')
.then(result => res.json(result))
.catch(err=> res.status(500).json(err))

})

router.get('/:phone_id', (req, res, next) => {

    const { phone_id } = req.params

    Phone
        .findById(phone_id)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
})


router.post("/create", (req, res, next) => {

    Phone
        .create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))
})

module.exports = router