module.exports = app => {

    // Base URLS
    app.use('/api', require('./base.routes.js'))
}