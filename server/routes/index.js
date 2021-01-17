module.exports = app => {

    // Base URLS
    app.use('/telephones', require('./base.routes.js'))
}