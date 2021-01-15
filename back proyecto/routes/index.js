module.exports = app => {

    // Base URLS
    app.use('/api/telefonos', require('./phones.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
}