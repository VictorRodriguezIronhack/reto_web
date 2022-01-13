module.exports = app => {
  app.use("/phones", require("./phones.routes"));
}