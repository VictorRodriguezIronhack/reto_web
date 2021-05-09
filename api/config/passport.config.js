
const passport = require('passport');
const User = require('../models/user.model');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const mongoose = require('mongoose');

passport.serializeUser((user, next) => {
    next(null, user.id);
});

passport.deserializeUser((id, next) => {
    User.findById(id)
        .then(user => next(null, user))
        .catch(next);
});

passport.use('local-auth', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, next) => {
    User.findOne({ email })
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

passport.use('google-auth', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/authenticate/google/cb',
}, (accessToken, refreshToken, profile, next) => {
    const googleId = profile.id;
    const name = profile.displayName;
    const email = profile.emails[0] ? profile.emails[0].value : undefined;

    if (googleId && name && email) {
        User.findOne({
            $or: [
                { email },
                { 'social.google': googleId }
            ]
        })
            .then(user => {
                if (!user) {
                    user = new User({
                        name,
                        email,
                        password: mongoose.Types.ObjectId(),
                        location: 'World',
                        social: {
                            google: googleId
                        }
                    });

                    return user.save()
                        .then(user => next(null, user))
                } else {
                    next(null, user);
                }
            })
            .catch(next)
    } else {
        next(null, null, { oauth: 'Invalid google oauth response' })
    }
}
))
