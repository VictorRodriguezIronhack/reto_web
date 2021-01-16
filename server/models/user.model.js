const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    wishlist: [Object],
    register: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', userSchema)