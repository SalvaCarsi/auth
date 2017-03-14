// TODO run test
const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('The app is up and running', () => {
  it('should say "The server is up and running!"', (done) => {
    request
      .get('/')
      .expect(200)
      .expect('The server is up and running!', done);
  });
});