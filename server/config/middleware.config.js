const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

module.exports = app => {
    app.use(logger('dev'))
    app.use(cookieParser())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
}