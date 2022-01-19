module.exports = app => {
  app.use("/telefonos", require("./phones.routes"));
}