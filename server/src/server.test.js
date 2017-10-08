const { expect } = require('chai');
const request = require('supertest');
const server = require('./server');
const mongoose = require('mongoose');
const { TodoModel } = require('./models');

describe('GET /status', () => {
  it('should response OK', async () => {
    const response = await request(server)
      .get('/status')
      .expect(200)
    expect(response.text).to.equal('OK');
  });
});

describe('GraphQL', () => {
  describe('Query', () => {
    describe('todos', () => {
      beforeEach(async () => {
        await TodoModel.remove({});
      });
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

        const actualResult = response.body.data;
        const expectedResult = {
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
        expect(actualResult).to.eql(expectedResult);
      });
    })
  });
})