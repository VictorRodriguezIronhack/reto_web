const phonesJSON = require("../public/phones.json");

const getPhones = (req, res) => {
  return { status: 200, data: phonesJSON };
};

module.exports = { getPhones };
