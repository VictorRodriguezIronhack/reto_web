module.exports = app => {

    // Base URLS
    app.use('/api/telephones', require('./telephones.routes.js'))
}