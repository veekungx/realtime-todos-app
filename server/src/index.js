const express = require('express');
const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { addMockFunctionsToSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const schema = require('./schema');
const mocks = require('./mocks');
const app = express();
const PORT = 4000;

const env = process.env.NODE_ENV;
mongoose.Promise = global.Promise;

if (env !== 'test') {
  // mongoose.connect('mongodb://localhost/test', {
  //   useMongoClient: true,
  //   promiseLibrary: global.Promise
  // });
  mongoose.connect('mongodb://veekungx:Ti030928@ds119395.mlab.com:19395/realtime-todos', {
    useMongoClient: true,
    promiseLibrary: global.Promise
  });
}

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function () {
  console.log('Mongoose ready to go');
});

app.use(cors());
app.get('/status', (req, res) => res.send('OK'));
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    models: {}
  }
}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: 'ws://localhost:4000/subscriptions'
}));

const server = createServer(app);
server.listen(PORT, () => {
  SubscriptionServer.create(
    { execute, subscribe, schema },
    { server, path: '/subscriptions' },
  );
  console.log('Server start on port:' + PORT)
});

module.exports = server;