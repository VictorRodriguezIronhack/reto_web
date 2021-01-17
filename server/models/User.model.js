const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    profileImg: {
        type: String,
        default: "https://res.cloudinary.com/djqsmqs26/image/upload/v1606298769/Project-2/pngwing.com_rl5rhk.png"
    },
    favMovil: [{
        movilid: {
            type: Schema.Types.ObjectId,
            ref: 'phones'
        }
    }],
    telephone: String
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)