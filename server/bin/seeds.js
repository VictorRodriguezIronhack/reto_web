const Phone = require('../models/phone.model')
const mongoose = require('mongoose')
const dbName = 'phones'

mongoose.connect(
    `mongodb+srv://admin:admin@cluster0.dtta7.mongodb.net/${dbName}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


// DB connection
require('./../config/db.config')
const data = require('./phones.json')

Phone
    .create(data)
    .then(res => {
        console.log(`${res.length} phones`)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log(err)
    })
