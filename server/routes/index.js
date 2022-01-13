module.exports = app => {
	app.use("/api/teléfonos", require("./phones.routes"));

}
