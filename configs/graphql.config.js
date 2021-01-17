const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const Phone = require('../models/phone.model')
const mongoose = require('mongoose')

module.exports = app => {
    app.use('/api', graphqlHTTP({
        schema: buildSchema(`
            type Phone {
                _id: ID!
                name: String!
                manufacturer: String!
                description: String!
                color: String!
                price: Float!
                imageFileName: String!
                screen: String!
                processor: String!
                ram: Float!
            }

            input PhoneInput {
                name: String!
                manufacturer: String!
                description: String!
                color: String!
                price: Float!
                imageFileName: String!
                screen: String!
                processor: String!
                ram: Float!
            }

            type RootQuery {
                phones: [Phone!]!
            }
            
            type RootMutation {
                createPhone( phoneInput: PhoneInput): Phone
            }
        
            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `), 
        rootValue: {
            phones: () => {
                return Phone.find()
                    .then(res => {
                        return res.map(elm => {
                        return { ...elm._doc, _id: elm.id}
                        })
                    })
                    .catch(err => new Error(err))
            },
            createPhone: (args) => {
                const newPhone = new Phone ({
                    name: args.phoneInput.name,
                    manufacturer: args.phoneInput.manufacturer,
                    description: args.phoneInput.description,
                    color: args.phoneInput.color,
                    price: +args.phoneInput.price,
                    imageFileName: args.phoneInput.imageFileName,
                    screen: args.phoneInput.screen,
                    processor: args.phoneInput.processor,
                    ram: +args.phoneInput.ram
                })
                return newPhone
                    .save()
                    .then(res => {
                        console.log(res)
                        return { ...res._doc, _id: res._doc._id.toString() }
                    })
                    .catch(err => {
                        console.log(err)
                        new Error(err)
                    })
            }
        },
        graphiql: true
    }))
}