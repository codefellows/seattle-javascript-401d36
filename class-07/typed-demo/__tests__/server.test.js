'use strict';

// under the covers this uses another library called supertest
const supergoose = require('cf-supergoose');
const server = require('../lib/server.js');

const mockRequest = supergoose.server(server);
jest.spyOn(console, 'log').mockImplementation();


describe('Testing our server', () => {
  it('shouold be able to GET bread', () => {
    return mockRequest.get('/bread')
      .then(results => {
        expect(results.body.bread.length).toBe(0);
      });
  });

  it('shoud be able to POST bread', () => {
    const testBread = { name: 'potatoe' };
    return mockRequest.post('/bread')
      .send(testBread)
      .then(results => {
        expect(results.body).toStrictEqual(testBread);
      })
  })
})
