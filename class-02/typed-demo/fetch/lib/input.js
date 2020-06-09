'use strict';

/**
 * Function that runs node agaisnt
 * @param path 
 * @returns module.exports from the file at the provided path
 */
const isUrl = require('is-url');
const minimist = require('minimist');

// want to parse input from the user
function Input() {
  const args = minimist(process.argv.slice(2));
  this.method = this.getMethod(args.m);
  this.url = this.getUrl(args.u);
}

Input.prototype.getMethod = function (method = '') {
  let methods = ['get', 'post', 'put', 'patch', 'delete'];
  return methods.includes(method.toLowerCase()) ? method.toUpperCase() : 'GET';
}

Input.prototype.getUrl = function (url = '') {
  return isUrl(url) ? url : undefined;
}

module.exports = Input;