module.exports = app => {

    app.use('/api', require('./auth.routes'))
    app.use('/api/phones', require('./phones.routes'))
}