require('dotenv');
const phonesData = require('./data');
const mongoose = require('mongoose');
const Phone = require('../models/Phone.model');

mongoose
  .connect(`mongodb://localhost/phone-cave`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    Phone.create(phonesData).then(() => {
      console.log(`${phonesData.length} inserted`);
      mongoose.disconnect();
    });
  })
  .catch((err) => console.error('Error connecting to mongo', err));
