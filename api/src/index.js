const { ApolloServer } = require('apollo-server');
const phoneData = require('./data/phones.json');
const fs = require('fs');
const path = require('path');



let data = phoneData;
let idCount = data.length

const resolvers = {
    Query: {
        info: () => 'This is the API of a reto_web2',
        feed: () => data,
        singlePhone(parent, args, context, info) {
            return data.find(phone => phone.id === args.id)
        }
    },
    Mutation: {
        post: (parent, args) => {
            const phone = {
                id: `${idCount++}`,
                name: args.name,
                manufacturer: args.manufacturer,
                description: args.description,
                color: args.color,
                price: args.price,
                imageFileName: args.imageFileName,
                screen: args.screen,
                processor: args.processor,
                ram: args.ram
            }
            data.push(phone)
            return phone
        }
    },
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
})

server
    .listen()
    .then(({ url }) => 
        console.log(`Server is running on ${url}`)
    );