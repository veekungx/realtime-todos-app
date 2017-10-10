const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { addMockFunctionsToSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const env = process.env.NODE_ENV;
mongoose.Promise = global.Promise;

if (env !== 'test') {
  mongoose.connect('mongodb://localhost/test', {
    useMongoClient: true,
    promiseLibrary: global.Promise
  });
}

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function () {
  console.log('Mongoose ready to go');
});

const schema = require('./schema');
const mocks = require('./mocks');
const server = express();

// addMockFunctionsToSchema({
//   schema,
//   mocks,
//   preserveResolvers: true
// });

server.use(cors());
server.get('/status', (req, res) => res.send('OK'));
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    models: {
      // TodoModel
    }
  }
}));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

//export for testing
module.exports = server;