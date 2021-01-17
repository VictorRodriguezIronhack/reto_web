const { graphqlHTTP } = require('express-graphql')
const graphQlSchema = require('../graphql/schemas')
const graphQlResolvers = require('../graphql/resolvers')


module.exports = app => {
    app.use('/api', graphqlHTTP({
        schema: graphQlSchema, 
        rootValue: graphQlResolvers, 
        graphiql: true
    }))
}