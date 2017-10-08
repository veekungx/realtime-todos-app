const { expect } = require('chai');
const request = require('supertest');
const server = require('./server');
const mongoose = require('mongoose');
const { TodoModel } = require('./models');


beforeEach(() => {
  mongoose.connect('mongodb://localhost/unit_test', {
    useMongoClient: true,
    promiseLibrary: global.Promise
  });
});

describe('GET /status', () => {
  it('should response OK', async () => {
    const response = await request(server)
      .get('/status')
      .expect(200)
    expect(response.text).to.equal('OK');
  });
});

describe('GraphQL', () => {

  beforeEach(async () => {
    await TodoModel.remove({});
  });

  describe('Query', () => {
    describe('todos', () => {
      it('should return todos', async () => {
        const todo = new TodoModel({ title: 'Hi', state: 'TODO_ACTIVE' });
        await todo.save();
        const response = await request(server)
          .post('/graphql')
          .send({
            query: `
              {
                todos{
                  edges{
                    node{
                      id
                      title
                      state
                    }
                  }
                }
              }
            `
          });

        const actual = response.body.data;
        const result = {
          todos: {
            edges: [{
              node: {
                id: todo._id.toString(),
                title: 'Hi',
                state: 'TODO_ACTIVE'
              }
            }]
          }
        };
        expect(actual).to.eql(result);
      });
    })
  });

  describe('Mutation', () => {
    describe('createTodo', () => {
      it('should create new todo', async () => {
        const title = "New Todo";
        const response = await request(server)
          .post('/graphql')
          .send({
            query: `
              mutation createTodo($title:String!){
                createTodo(title: $title){
                  id
                  title
                  state
                }
              }
            `,
            variables: { title }
          })
        const actual = response.body.data.createTodo;
        const result = await TodoModel.findOne();
        expect(actual.id).to.eql(result._id.toString());
      })
    });
  });
})