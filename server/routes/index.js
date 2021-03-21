module.exports = app => {

    // Base URLS
    app.use('/api', require('./phone.routes.js'))
}