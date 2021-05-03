const express = require('express');
const createError = require('http-errors');
const mongoose = require('mongoose');
const logger = require('morgan');

require('./config/db.config');
require('dotenv').config()

const app = express();

/**React App */
app.use(express.static(`${__dirname}/react-app`))

/** Middelwares  */
app.use(express.json());
app.use(logger('dev'));

/** Configure Routes */
const router = require('./config/routes.config');
app.use('/api', router);

/** Configure React Routes */
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/react-app/index.html`)
})

/** Handle Errors */
app.use((error, req, res, next) => {
    if (error instanceof mongoose.Error.ValidationError) error = createError(400, error)
    else if (error instanceof mongoose.Error.ValidationError) error = createError(404, 'Resource not found')
    else if (error.message.includes('E11000')) error = createError(400, 'Already exists')
    else if (!error.status) error = createError(500, error)

    console.error(error);

    const data = {
        message: '', 
        errors: {}
    }

    data.message = error.message;
    data.errors = error.errors ?
        Object.keys(error.errors)
            .reduce((errors, key) => ({...errors, [key]: error.errors[key]?.message || error.errors[key] }), {}) :
        undefined;

    res.status(error.status).json(data)
});

const port = Number(process.env.PORT || 3001);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Ready! Listen on port ${port}`);
    })
}

module.exports = app