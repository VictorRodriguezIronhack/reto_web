module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/files', require('./base.routes.js'))
}