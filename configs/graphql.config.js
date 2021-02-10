const { graphqlHTTP } = require('express-graphql')
const graphQlSchema = require('../graphql/schemas')
const graphQlResolvers = require('../graphql/resolvers')
const isAuth = require('../middleware/is-auth')


module.exports = app => {
    app.use(isAuth)
    
    app.use('/api', graphqlHTTP({
        schema: graphQlSchema, 
        rootValue: graphQlResolvers, 
        graphiql: true
    }))
}