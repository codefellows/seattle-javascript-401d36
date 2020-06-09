'use strict';

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(() => {
  return {
    u: 'http://localhost:3000',
    m: 'post'
  }
});

const Input = require('./input.js');

describe('Testing the Input module', () => {
  it('should return the suplied method', () => {
    let options = new Input();
    expect(options.method).toBe('POST');
  });
});