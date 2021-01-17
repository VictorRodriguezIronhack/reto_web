module.exports = app => {

    // Base URLS
    app.use('/api', require('./auth.routes'))
    app.use('/api/phone', require('./phone.routes'))
    app.use('/api/files', require('./files.routes'))

}