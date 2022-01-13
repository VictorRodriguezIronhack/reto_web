const express = require("express");
const router = express.Router();
const Phones = require("../models/Phones-models");

router.get("/telefonos", (req, res, next) => {
    Phones.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});

module.exports=router;