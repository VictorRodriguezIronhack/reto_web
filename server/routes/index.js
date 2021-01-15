module.exports = app => {

    // Base URLS
    app.use('/api/phones', require('./phone.routes.js'))
}