require("dotenv/config");

require("./db");


const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);
require("./config/cors.config")(app);

const projectName = "server";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

const allRoutes = require("./routes");
app.use("/api", allRoutes);

require("./error-handling")(app);

module.exports = app;
