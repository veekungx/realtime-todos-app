const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');

const schema = require('./schema');
const server = express();

server.use(cors());
server.get('/status', (req, res) => res.send('OK'));
server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

//export for testing
module.exports = server;