const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        default: 'e-mail'
    },
    password: {
        type: String,
        required: true,
        default: 'password',
    },
    avatarUrl: {
        type: String,
        default: 'https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png'
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User