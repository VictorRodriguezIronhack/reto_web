module.exports = app => {

    // Base URLS
    app.use('/api/telefonos', require('./telefono.routes.js'))
}