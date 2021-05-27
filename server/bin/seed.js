const mongoose = require('mongoose')

const User = require('../models/user.model')
const Telefono = require('../models/telefono.model')

mongoose.connect('mongodb://localhost/telefonos')

const users = [
    {
        username: 'admin',
        email: 'admin@msn.es',
        password: 'admin',
        role:'ADMIN'
    },
    {
        username: 'invitado',
        email: 'invitado@msn.es',
        password: 'invitado',
        role: 'GUEST'
    },
]

const telefonos = [
    {
        name: 'Galaxy S7',
        brand: 'Samsung',
        description: 'Samsung Galaxy S7',
        price: [350],
        discount: 15,
        imageUrl: ['https://raw.githubusercontent.com/jaim3G/reto_web/main/Galaxy_S7.png'],
        color: ['grey'],
        rating: 4,
        storage: [32],
    },{
        name: 'Honor 10',
        brand: 'Huawei',
        description: 'Huawei Honor 10',
        price: [200],
        discount: 10,
        imageUrl: ['https://raw.githubusercontent.com/jaim3G/reto_web/main/Honor_10.png'],
        color: ['grey'],
        rating: 3.8,
        storage: [64],
    },
    {
        name: 'Iphone 7',
        brand: 'Apple',
        description: 'Apple Iphone 7',
        price: [220],
        discount: 15,
        imageUrl: ['https://raw.githubusercontent.com/jaim3G/reto_web/main/IPhone_7.png'],
        color: ['black'],
        rating: 4.4,
        storage: [32],
    },
    {
        name: 'Moto G6',
        brand: 'Motorola',
        description: 'Motorola Moto G6',
        price: [130],
        discount: 15,
        imageUrl: ['https://raw.githubusercontent.com/jaim3G/reto_web/main/Moto_G6.png'],
        color: ['white'],
        rating: 3.5,
        storage: [32],
    },
    {
        name: 'Nokia 7',
        brand: 'Nokia',
        description: 'Nokia 7',
        price: [150],
        discount: 8,
        imageUrl: ['https://raw.githubusercontent.com/jaim3G/reto_web/main/Nokia_7.1.png'],
        color: ['black'],
        rating: 4,
        storage: [64],
    },
    {
        name: 'P10 Lite',
        brand: 'Huawei',
        description: 'Huawei P10 Lite',
        price: [320],
        discount: 0,
        imageUrl: ['https://raw.githubusercontent.com/jaim3G/reto_web/main/P10_Lite.jpg'],
        color: ['white'],
        rating: 4.6,
        storage: [32],
    },
    {
        name: 'MI A2',
        brand: 'Xiaomi',
        description: 'Xiaomi MI A2',
        price: [159],
        discount: 5,
        imageUrl: ['https://raw.githubusercontent.com/jaim3G/reto_web/main/Xiaomi_MI_A2.jpeg'],
        color: ['grey'],
        rating: 4,
        storage: [64],
    },
    {
        name: 'Zenfone 5',
        brand: 'Asus',
        description: 'Asus Zenfone 5',
        price: [245],
        discount: 0,
        imageUrl: ['https://raw.githubusercontent.com/jaim3G/reto_web/main/ZenPhone_5.jpg'],
        color: ['black'],
        rating: 4.8,
        storage: [64],
    },
]

User
    .create(users)
    .then(allUsersCreated => {
        console.log(`Created ${allUsersCreated.length} users`)
        mongoose.connection.close()
    })
    .catch(err => next(new Error(err)))

Telefono
    .create(telefonos)
    .then(allPhonesCreated => {
        console.log(`Created ${allPhonesCreated.length} activities`)
        mongoose.connection.close()
    })
    .catch(err => next(new Error(err)))