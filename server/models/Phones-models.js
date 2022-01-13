const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Phones = new Schema({
        
            id: Number, 
            type: Number,
            name: String,
            manufacturer: String,
            description: String,
            color: String,
            price: Number,
            imageFileName: String,
            screen: String,
            processor: String,
            ram: Number,
        },
);


const phones = model("phones", userSchema);

module.exports = Phones;

            
        
 
   



    
        
            
                
                    
                        
                            
                                