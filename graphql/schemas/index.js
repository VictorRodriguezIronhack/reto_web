const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Purchase {
        _id: ID! 
        phone: Phone!
        user: User!
        createdAt: String!
        updatedAt: String!
    }

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
        date: String!
        creator: User!
    }

    type User {
        _id: ID!
        email: String!
        password: String
        createdPhones: [Phone!]!
        boughtPhones: [Phone!]
    }

    type LoginData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
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
        date: String!
    }

    input UserInput {
        email: String!
        password: String!
    }

    type RootQuery {
        phones: [Phone!]!
        purchases: [Purchase!]!
        login(email: String!, password: String!): LoginData!
    }
    
    type RootMutation {
        createPhone( phoneInput: PhoneInput ): Phone
        createUser( userInput: UserInput ): User
        purchasePhone( phoneID: ID!): Purchase!
        returnPhone( purchaseID: ID!): Phone!   
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)