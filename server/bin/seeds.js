// DB connection
require('./../config/db.config')
const mongoose = require("mongoose")


// Seed here!

const Phone = require('../models/phone.model')
const phones = require('../API_content/phones.json')

Phone
    .create(phones)
    .then(response => {
        console.log(`It just been created ${response.length} phones in the database`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error occurred:`, err))