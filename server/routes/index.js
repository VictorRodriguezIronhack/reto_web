module.exports = (app) => {
  app.use("/allphones", require("./phone.routes"));
};
