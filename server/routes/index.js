module.exports = app => {
  app.use("/api/telephones", require("./tel.routes"))
}

