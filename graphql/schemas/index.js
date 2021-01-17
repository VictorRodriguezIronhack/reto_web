const { buildSchema } = require('graphql')

module.exports = buildSchema(`
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

  type User {
      _id: ID!
      email: String!
      password: String
      boughtPhones: [Phone!]
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

  input UserInput {
      email: String!
      password: String!
  }

  type RootQuery {
      phones: [Phone!]!
  }
  
  type RootMutation {
      createPhone( phoneInput: PhoneInput ): Phone
      createUser( userInput: UserInput ): User
  }

  schema {
      query: RootQuery
      mutation: RootMutation
  }
`)