const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const TodoSchema = Schema({
  title: String,
  state: String
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = {
  TodoModel
}
