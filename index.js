import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//types
import { typeDefs } from './schema.js';

//server setup
const server = new ApolloServer({
    typeDefs,
    //resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 }
});

console.log('Server ready at port ', 3000);