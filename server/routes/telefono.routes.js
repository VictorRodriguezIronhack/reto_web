const express = require("express");
const router = express.Router();
import { Telefonos } from "../reto_web/phones.json"

router.get("/", (req,res) => {

    Telefonos.find()
        .then(listaDeTelefonos => res.status(200).json(listaDeTelefonos))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving telefonos", err }))

})