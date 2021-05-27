module.exports = app => {

    // Base URLS
    app.use('/api/telefonos', require('./phone.routes'))
    app.use('/api/order', require('./order.routes'))
}