const mongoose = require('mongoose')
const Phone = require('./../models/phone.model')

//DATABASE
mongoose.connect('mongodb://localhost/phones')


const phones = [
    {
        "name": "iPhone 7",
        "manufacturer": "Apple",
        "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
        "color": "black",
        "price": 769,
        "imageFileName": "https://res.cloudinary.com/dodneiokm/image/upload/v1610839471/phone-cave/IPhone_7_wkgugr.png",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2,
        "stock": 7
    },
    {
        "name": "Galaxy S7",
        "manufacturer": "Samsung",
        "description": "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
        "color": "grey",
        "price": 209,
        "imageFileName": "https://res.cloudinary.com/dodneiokm/image/upload/v1610839471/phone-cave/Galaxy_S7_dlaw9c.jpg",
        "screen": "5,1 inch Quad-HD",
        "processor": "Snapdragon 820",
        "ram": 4,
        "stock": 7
    },
    {

        "name": "Honor 10",
        "manufacturer": "Huawei",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "blue",
        "price": 399,
        "imageFileName": "https://res.cloudinary.com/dodneiokm/image/upload/v1610839471/phone-cave/Honor_10_mgubmg.jpg",
        "screen": "5,84 inch Full-HD",
        "processor": "Kirin 970",
        "ram": 6,
        "stock": 10
    },
    {

        "name": "P10 Lite",
        "manufacturer": "Huawei",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "white",
        "price": 249,
        "imageFileName": "https://res.cloudinary.com/dodneiokm/image/upload/v1610839472/phone-cave/P10_Lite_zc6diw.jpg",
        "screen": "5,2 inch Full-HD",
        "processor": "Kirin 658",
        "ram": 4,
        "stock": 10
    },
    {

        "name": "Nokia 7.1",
        "manufacturer": "Nokia",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 275,
        "imageFileName": "https://res.cloudinary.com/dodneiokm/image/upload/v1610839471/phone-cave/Nokia_7.1_clsgaf.jpg",
        "screen": "5,84 inch Full-HD",
        "processor": "Octa-core",
        "ram": 4,
        "stock": 7
    },
    {

        "name": "Zen Phone 5",
        "manufacturer": "Asus",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 359,
        "imageFileName": "https://res.cloudinary.com/dodneiokm/image/upload/v1610839472/phone-cave/ZenPhone_5_l1sjpi.jpg",
        "screen": "6,2 inch Full-HD",
        "processor": "Snapdragon 636",
        "ram": 6,
        "stock": 5
    },
    {

        "name": "MI A2",
        "manufacturer": "Xiaomi",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 179,
        "imageFileName": "https://res.cloudinary.com/dodneiokm/image/upload/v1610839472/phone-cave/Xiaomi_MI_A2_a0dqxw.jpg",
        "screen": "5,99 inch Full-HD",
        "processor": "Snapdragon 660",
        "ram": 6,
        "stock": 6
    },
    {

        "name": "Moto G6",
        "manufacturer": "Motorola",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 199,
        "imageFileName": "https://res.cloudinary.com/dodneiokm/image/upload/v1610839472/phone-cave/Moto_G6_pheqgq.png",
        "screen": "5,7 inch Full-HD",
        "processor": "Snapdragon 450",
        "ram": 3,
        "stock": 3
    }
]

Phone
    .create(phones)
    .then(allPhonesCreated => {
        console.log(`Created ${allPhonesCreated.length} phones`)
        mongoose.connection.close()
    })
    .catch(err => console.log('An error occured', err))