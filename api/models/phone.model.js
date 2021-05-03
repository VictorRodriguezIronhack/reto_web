const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('../models/user.model')

const phoneSchema = new Schema({
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: String,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: String
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.__v;
            ret.id = doc.id;
            ret.id = ret.id;
            return ret;
        }
    }
});

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;