const  express  = require("express");
const router = express.Router();
const  phonsesJson =  require('../phones.json')
 router.get('/', (req, res)=>{
   console.log(phonsesJson)
   res.json({messgae :"OK", data :phonsesJson })
 })

module.exports= router;
