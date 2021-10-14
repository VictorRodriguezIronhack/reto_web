require('dotenv/config');
require('./db');
const express = require('express');

const { isAuthenticated } = require('./middleware/jwt.middleware'); // <== IMPORT

const app = express();
require('./config')(app);

// 👇 MIDDLEWARE MISSING
const allRoutes = require('./routes');
app.use('/api', allRoutes);

const authRouter = require('./routes/auth.routes');
app.use('/api/auth', authRouter);

const phoneRoutes = require('./routes/phone.routes');
app.use('/api', phoneRoutes);

// app.use((req, res, next) => {
//     // If no routes match, send them the React HTML.
//     res.sendFile(__dirname + "/public/index.html");
//   });

// require("./error-handling")(app);

module.exports = app;
