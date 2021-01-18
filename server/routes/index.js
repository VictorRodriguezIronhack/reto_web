module.exports = app => {

    // Base URLS
   app.use('/api/telefonos', require('./phones.routes.js'))
}