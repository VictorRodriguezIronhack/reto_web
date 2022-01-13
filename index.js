const  express  = require("express");
const  bodyParser = require( "body-parser");
const  cors  = require("cors");
const  dotenv  = require('dotenv');
const indexRoutes = require('./routes/index.js')


const app = express();
dotenv.config();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/', indexRoutes);
app.use(function (err, req, res, next) {
  console.log("Global Error handler,some thing didnt work:", err.message)
  res.status(500).json({ devMesg: "global Error Handler", ErrorMessage: err.message })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port': ${PORT}`))


