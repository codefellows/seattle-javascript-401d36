'use strict';

const Request = require('./request.js');
const supergoose = require('cf-supergoose');

beforeAll(() => {
  supergoose.startDB();
});

afterAll(() => {
  supergoose.stopDB();
});

describe('test request class', () => {
  it('should contain a response', (done) => {

    const getRequest = new Request({ url: 'https://google.com', method: 'get' });
    getRequest.fetch()
      .then(response => {
        expect(response).toBeTruthy();
        done();
      });

  });
});