module.exports = (app) => {
  app.use("/api/telefonos", require("./Phones/Phones.routes"));
};
