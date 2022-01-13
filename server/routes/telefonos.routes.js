const router = require("express").Router();
const axios = require("axios");
const PhonesData = require('../public/phones.json')



//això va a http://localhost:5005/api/telefonos
router.get("/telefonos", (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.json(PhonesData)
  console.log(PhonesData)
  
})


//això va a http://localhost:5005/api/movies/getOneMovie/:id
router.get("/getOnePhone/:id", async (req, res, next) => {
  try{
    // const axiosCall = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const axiosCall = await axios(`https://api.themoviedb.org/3/movie/${req.params.TMDB_id}?api_key=${process.env.API_KEY}`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})


module.exports = router