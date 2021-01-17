const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        default: "Desconocido"
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User