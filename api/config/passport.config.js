
const passport = require('passport');
const User = require('../models/user.model');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, next) => {
    next(null, user.id);
});

passport.deserializeUser((id, next) => {
    User.findById(id)
        .populate('pets')
        .then(user => next(null, user))
        .catch(next);
});

passport.use('local-auth', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, next) => {
    User.findOne({ email })
        .populate('pets')
        .populate({
            path: "ratings",
            populate: {
                path: "owner",
                model: "User"
            }
        })
        .then(user => {
            if (!user) {
                next(null, null, { email: { message: 'Invalid email or password' } });
            } else {
                return user.checkPassword(password)
                    .then(match => {
                        if (match) {
                            if (user.verified && user.verified.date) {
                                next(null, user);
                            } else {
                                next(null, null, { email: { message: 'Your account is not validated yet, please check your email' } });
                            }
                        } else {
                            next(null, null, { email: { message: 'Invalid email or password' } });
                        }
                    })
            }
        }).catch(next)
}));