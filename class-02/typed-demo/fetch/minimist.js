'use strict';

const minimist = require("minimist");

const args = process.argv.splice(2);

const actions = ['add', 'delete', 'edit']

const parsedArgs = minimist(args);
for (let key in parsedArgs) {
  console.log(key);
}

console.log(Object.keys(parsedArgs), actions);

