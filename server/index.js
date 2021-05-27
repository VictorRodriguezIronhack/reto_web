const express = require("express");
const phones = require('../phones.json')
const cors = require('cors')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    methods: ['GET', 'POST'],
    credentials: true,
    origin: "http://localhost:3000",
  })
)

app.get("/", (req, res) => {
  setTimeout(()=>{
    res.json({data: phones});
  }, 2000)
});

app.get("/:id", (req, res) => {
  phones.find(req.params.id)
  .then((result) => {
    console.log('details: ', result)
  })
  .catch((err) => {
    console.log(err)
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
