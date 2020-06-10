'use strict';

// consider putting process.args here as a global and passing it into Input
// node modules
const Input = require('./lib/input');
const Note = require('./lib/notes');

const input = new Input;
const note = new Note(input);

console.log(input);
console.log(note);
