const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_PATTERN = /^.{8,}$/;
const bcrypt = require('bcryptjs');
const admins = (process.env.ADMINS_EMAIL || '')
    .split(',')
    .map(admin => admin.trim());

const userSchema = new Schema({
    name: {
        type: String,
        required: 'An user name is required'
    },
    email: {
        unique: true,
        type: String,
        required: 'A valid email is required',
        match: [EMAIL_PATTERN, 'the email is invalid']
    },
    password: {
        type: String,
        required: 'A valid password is required',
        match: [PASSWORD_PATTERN, 'the password is invalid']
    },
    avatar: {
        type: String,
        default: function () {
            return `https://i.pravatar.cc/150?u=${this.id}`
        }
    },
    description: {
        type: String,
    },
    role: {
        type: String,
        enum: ["guest", "admin"],
        default: 'guest'
    },
    location: {
        type: String,
        required: 'Location is required'
    },
    verified: {
        date: Date,
        token: {
            type: String,
            default: () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        },
    },
    social: {
        google: String
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            delete ret.verified;
            return ret
        }
    },
})


userSchema.pre('save', function (next) {
    if (admins.includes(this.email)) {
        this.role = 'admin';
    }
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10).then((hash) => {
            this.password = hash;
            next();
        });
    } else {
        next();
    }
});

userSchema.virtual('opinions', {
    ref: 'Opinion',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.virtual('purchases',  {
    ref: 'Purchase',
    localField: '_id',
    foreignField: 'owner'
})



userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
};


const User = mongoose.model('User', userSchema);
module.exports = User;