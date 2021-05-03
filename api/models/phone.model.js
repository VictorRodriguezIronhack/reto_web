const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: 'Phone name is required',
    },
    description: {
        type: String, 
        required: 'A description is required',
        minLength: [10, 'Phone description needs at least 10 chars']
    },
    color: {
        type: String, 
        required: 'A phone color is required'
    },
    price: {
        type: Number,
        required: 'A phone price is required',
        min: 1
    },
    imageFileName: {
        type: String,
        required: 'Phone image is required'
    },
    screen: {
        type: String,
        required: 'Phone screen dimensions is required'
    },
    processor: {
        type: String,
        required: 'Phone processor is required'
    },
    ram: {
        type: Number,
        required: 'Phone ram is required'
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.__v;
            ret.id = doc.id;
            return ret;
        }
    }
});

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;