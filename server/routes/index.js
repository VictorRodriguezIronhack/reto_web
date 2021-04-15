module.exports = app => {

    // Base URLS
    app.use('/api/phones', require('./phones.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
}