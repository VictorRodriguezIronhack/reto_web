module.exports = app => {
	app.use("/api/telefonos", require("./phones.routes"));

}
