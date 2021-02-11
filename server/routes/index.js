module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/files', require('./files.routes.js'))
}