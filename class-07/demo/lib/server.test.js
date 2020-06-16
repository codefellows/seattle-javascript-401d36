// 'use strict';

const logger = require('./logger.js');

let req = {};
let res = {};
let next = jest.fn();
let consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('testing logging middleware', () => {
  it('shoud log to the console', () => {

    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('moves to the next middleware', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});