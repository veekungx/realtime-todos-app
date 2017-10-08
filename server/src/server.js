const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { addMockFunctionsToSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const cors = require('cors');

const schema = require('./schema');
const mocks = require('./mocks');
const { TodoModel } = require('./models');

const server = express();

addMockFunctionsToSchema({
  schema,
  mocks,
  preserveResolvers: true
});

server.use(cors());
server.get('/status', (req, res) => res.send('OK'));
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    models: {
      TodoModel
    }
  }
}));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

//export for testing
module.exports = server;