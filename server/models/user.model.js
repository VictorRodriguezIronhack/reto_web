const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'GUEST'
    },
    wishlist:[{
        type: Schema.Types.ObjectId,
        ref: 'Telefono',       
    }],
    purchases:[{
        type: Schema.Types.ObjectId,
        ref: 'Telefono',       
    }] 
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User