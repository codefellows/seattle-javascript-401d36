'use strict';

// node modules

const Input = require('./lib/input');
const fetch = require('./lib/http');

const options = new Input();

fetch(options);
