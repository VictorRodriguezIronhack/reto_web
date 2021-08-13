require("dotenv/config")
require("./db")

const path = require('path')
const express = require("express")
const app = express()

require("./config")(app)
require("./config/cors.config")(app)
require('./routes')(app)

app.use('/static', express.static(path.join(__dirname, 'public')))



module.exports = app
