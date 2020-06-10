'use strict';

// making the fake test data through mock
jest.mock('minimist');
const minimist = require('minimist');

//  minimist wants Object.keys(parsedArgs)[1] and Object.values(parsedArgs[1])... so this mock represents that
minimist.mockImplementation(() => {
  return {
    x: '',
    a: 'passing test',
    payload: ''
  }
});

const Input = require('../lib/input');

describe('Testing the Input module', () => {
  it('should return the keys of action and payload', () => {
    let options = new Input();
    expect(options.action).toBe('add');
    expect(options.payload).toBe('passing test');
  });
});
