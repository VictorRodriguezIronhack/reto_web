//----imports
require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const chalk = require('chalk')
const flash = require('connect-flash')
const path = require('path')
const cors = require('cors')


// ---------- Mongoose ---------- //
require('./configs/mongoose')

///---Express
const app = express()
// ---------- Middleware setup ---------- //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// -------- CORS --------
app.use(
  cors({
    methods: ['GET', 'POST'],
    credentials: true,
    origin: ['http://localhost:3000'],
  })
)

// ---------- ROUTES ---------- //
app.use('/', require('./routes/index.routes'))


// ---------- LISTENER ---------- //
app.listen(process.env.PORT || 5000, () => {
    console.log(chalk.green.inverse('Port activated'))
  })