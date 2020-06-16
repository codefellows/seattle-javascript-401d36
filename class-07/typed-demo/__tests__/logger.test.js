'use strict';

const logger = require('../lib/middleware/logger.js');

let req = { method: 'test', path: 'test' };
let res = {};
let next = jest.fn();
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();


describe('Middleware test', () => {
  it('should console log stuff and move on', () => {

    logger(req, res, next)
    expect(consoleSpy).toHaveBeenCalledWith('__REQUEST__ :: test test');
    expect(next).toHaveBeenCalledWith();
  })
})