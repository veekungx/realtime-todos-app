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