module.exports = app => {
    app.use("/api/telephones", require("./phone.routes"));
};