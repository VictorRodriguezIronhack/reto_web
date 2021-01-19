require('dotenv').config()

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/cors.config')(app)

// Routes index
require('./routes')(app)

module.exports = app
