const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const phones = require('./phones.json');

app.get('/telefonos', function(req, res) {
  res.header("Access-Control-Alow-Origin", "*");
  res.json(phones);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});