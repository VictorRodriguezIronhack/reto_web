const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    name: {
        type: String,
        required: 'A phone name is required'
    },
    manufacturer: {
        type: String,
        required: 'A manufacturer is required',
        enum: ["Apple", "Samsung", "Huawei", "Nokia", "Asus", "Xiaomi", "Motorola"]
    },
    description: {
        type: String,
        required: 'A description is required'
    },
    color: {
        type: String,
        required: 'A color is required',
        enum: ["black", "grey", "blue", "red", "white", "green", "pink", "yellow"]
    },
    price: {
        type: Number,
        required: 'A price is required'
    },
    imageFileName: {
        type: String,
        required: "An Image is required",
        image: {
            type: String,
            required: "Image is required",
            validate: {
                validator: function (value) {
                    try {
                        const url = new URL(value);
                        return url.protocol === "http:" || url.protocol === "https:";
                    } catch (error) {
                        return false;
                    }
                },
                message: (props) => `Invalid image URL`,
            },
        },
    },
    screen: {
        type: String,
        required: 'A screen size and type is required'
    },
    processor: {
        type: String,
        required: 'A processor type is required'
    },
    ram: {
        type: Number,
        required: 'A ram size is required'
    },
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = doc._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            },
        },
    }
)

phoneSchema.virtual('opinions', {
    ref: "Opinion",
    localField: '_id',
    foreignField: 'phone'
});

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;