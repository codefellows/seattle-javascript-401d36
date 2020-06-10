'use strict';

const minimist = require('minimist');
const parsedArgs = minimist(process.argv.slice(2));

const flagCommand = Object.keys(parsedArgs)[1];
const payloadEntry = Object.values(parsedArgs)[1];
// console.log(flagCommand);
// const actions = ['add', 'delete', 'list'];
const actions = require('./actions');

class Input {
  constructor() {
    this.action = this.getAction(flagCommand);
    this.payload = this.payload(payloadEntry);
    // console.log(this.action);
  }

  // jacob: we can define a default value for a parameter inside of these parethenses. 
  //   Only works for undefined values.
  getAction(command = '') {
    let action = '';
    switch (command) {
      case 'a':
        action = 'add';
        break;
      case 'd':
        action = 'delete';
        break;
      case 'l':
        action = 'list';
        break;
      default:
        action = undefined;
    }
    return action;
  }

  payload(payload = '') {
    return payload ? payload : undefined;
  }
}

module.exports = Input;

