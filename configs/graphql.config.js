const { graphqlHTTP } = require('express-graphql')
const graphQlSchema = require('../graphql/schemas')
const graphQlResolvers = require('../graphql/resolvers')
const isAuth = require('../middleware/is-auth')


module.exports = app => {
    /* Cors config */
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        if (req.method === 'OPTIONS') {
            return res.sendStatus(200)
        }
        next()
    })
    
    app.use(isAuth)
    
    app.use('/api', graphqlHTTP({
        schema: graphQlSchema, 
        rootValue: graphQlResolvers, 
        graphiql: true
    }))
}