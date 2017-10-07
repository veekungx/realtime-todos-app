const { expect } = require('chai');
const request = require('supertest');
const server = require('./server');

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
    it('should return todos', async () => {
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
                  }
                }
              }
            }
          `
        })
      const actualResult = response.body.data;
      const expectedResult = {
        todos: {
          edges: []
        }
      };
      expect(actualResult).to.eql(expectedResult);
    });
  });
})