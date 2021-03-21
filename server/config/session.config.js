const expressSession = require('express-session')

const sessionConfig = {
    secret: process.env.SESSION_SECRET || 'super secret (change it)',
    saveUninitialized: true,
    resave: true
}

module.exports = app => app.use(expressSession(sessionConfig))