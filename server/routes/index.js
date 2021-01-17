module.exports = app => {

    app.use('/api/phones', require('./phone.routes.js'))
}