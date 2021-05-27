require('dotenv').config();
const express = require('express');
const path = require('path');

//DB Configuration
require('./configs/db.config');

const app = express();

// Middleware Setup
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);
// require('./configs/session.config')(app);
// require('./configs/passport.config')(app);

const phoneRoutes = require('./routes/phoneRoutes');
app.use('/api/phones', phoneRoutes);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Catch 404 and respond with error message
app.use((req, res, next) => {
  return res.status(404).json({ message: 'Not found' });
});

module.exports = app;
