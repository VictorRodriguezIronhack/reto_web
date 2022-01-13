const express = require("express");
const app = express();

require("./routes")(app);
require("./error-handling")(app);
require("./db");

module.exports = app;