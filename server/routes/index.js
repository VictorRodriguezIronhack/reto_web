module.exports = app => {

    // Base URLS
    app.use('/api/telefonos', require('./mobile.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}