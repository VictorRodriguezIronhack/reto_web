const mongoose = require('mongoose')
const Phone = require('../models/phone.model')

const dbName = 'reto-web'
mongoose.connect(`mongodb://localhost/${dbName}`)

const phones = require('./../phones.json')

Phone
    .create(phones)
    .then(allPhonesCreated => {
        console.log(`Created ${allPhonesCreated.length} phones`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))

