require('dotenv/config');
require('./db');
const express = require('express');
var cors = require('cors');
// const { isAuthenticated } = require('./middleware/jwt.middleware'); // <== IMPORT

const app = express();
require('./config')(app);

// CORS allows
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept Authorization');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
		return res.status(200).json({});
	}
	next();
});

app.use(cors());

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
