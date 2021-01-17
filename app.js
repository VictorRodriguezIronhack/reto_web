require('dotenv').config()
require('./configs/mongoose.config')
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

require('./configs/middleware.config')(app)
require('./configs/graphql.config')(app)

// Routes index
require('./routes')(app)


module.exports = app