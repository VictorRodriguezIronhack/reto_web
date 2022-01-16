const phonesService = require("../services/phones");

const getPhones = (req, res) => {
  try {
    const result = phonesService.getPhones();
    console.log("hola");
    console.log(result.data);
    return res.status(result.status).json(result.data);
  } catch (err) {
    return res.status(400).json({ errorMessage: "Bad request: " + err });
  }
};

module.exports = { getPhones };
