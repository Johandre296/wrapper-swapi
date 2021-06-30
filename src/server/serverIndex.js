require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const SWAPI = require('./datasources/StarwarsAPI');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        swapi: new SWAPI(),
      })
 });


server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
    `);
  });
  