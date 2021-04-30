require('dotenv').config();
const mongoose = require('mongoose');
const Phone = require('../models/phone.model');
const phonesData = require('../data/phones.json');


require('../config/db.config');

mongoose.connection.once('open', () => {
    console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);
    mongoose.connection.db.dropDatabase()
        .then(() => console.log(`- Database dropped`))
        .then(() => Phone.create(phonesData))
        .then(phones => {
            console.info(`- Added ${phones.length} phones`)
        })
        .then(() => console.info(`- All data created!`))
        .catch(error => console.error(error))
        .then(() => process.exit(0))
});