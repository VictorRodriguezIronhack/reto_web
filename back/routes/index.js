module.exports = app => {
    
    app.use('/api/telefonos', require('./phones.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    
}