const cors = require('micro-cors')();
const { ApolloServer } = require('apollo-server-micro');
const typeDefs = require('./schema');

const resolvers = require('./resolver');

const apolloServer = new ApolloServer({
  // cors: {
  //   origin: '*', // <- allow request from all domains
  //   credentials: true,
  // },
  typeDefs,
  resolvers,
});

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// module.exports = cors(apolloServer.createHandler()); // custom path goes here {path: 'api/graphql'}
module.exports = cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  return apolloServer.createHandler()(req, res);
});
