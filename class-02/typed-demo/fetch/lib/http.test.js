'use strict';

const fetch = require('./http.js');

jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');

describe('testing http modules', () => {

  it('should fire the console log function', () => {

    // here is the real js test
    fetch({ url: 'test', method: 'test' });
    expect(console.log).toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });
});