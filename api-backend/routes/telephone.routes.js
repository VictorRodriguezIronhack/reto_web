const express = require('express');
const router  = express.Router();
const Telephone = require('../models/Telephone.model')

/* GET All phones */
router.get('/all-phones', (req, res) => {
  Telephone.find()
  .then((result)=>{ 
    console.log(result)
    res.send(result)
  })
  .catch((error)=>{
    console.log(error)
  })
  
});


module.exports = router;
