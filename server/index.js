const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const cors = require('cors');
app.use(cors());


let rawdata = fs.readFileSync(path.resolve(__dirname, 'phones.json'));
let phones = JSON.parse(rawdata);


app.get('/phones', (req, res) =>{
    res.send(phones);
});
app.listen(5000);

