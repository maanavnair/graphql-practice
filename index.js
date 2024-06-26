import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';

//types
import { typeDefs } from './schema.js';

const resolvers = {
    Query: {
        games(){
            return db.games;
        },
        game(_, args){
            return db.games.find((game) => game.id === args.id)
        },
        reviews(){
            return db.reviews;
        },
        authors(){
            return db.authors;
        },
        author(_, args){
            return db.authors.find((author) => author.id === args.id)
        },
        review(_, args){
            return db.reviews.find((review) => review.id === args.id)
        }
    }
}

//server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 }
});

console.log('Server ready at port ', 3000);