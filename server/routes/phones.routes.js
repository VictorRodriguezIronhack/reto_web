const router = require("express").Router();
const Phones = require("../phones.json")



// router.get("/getall", (req, res, next) => {
//     Phones.find()
//         .then(allProducts => res.json(allProducts))
//         .catch(err => res.status(500).json({ err, errMessage: "Error looking for all products" }))
// });

router.get("/", (req, res, next) => {
    res.json(Phones)
 });

 router.get("/details/:id", (req, res) => {
   const {id} = req.params;
   const [details] = Phones.filter((elm) => elm.id == id);
   res.json(details) 
 });

 

module.exports = router;