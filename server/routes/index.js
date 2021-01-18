module.exports = app => {

    // Base URLS
    app.use('/api/telefonos', require('./phone.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}