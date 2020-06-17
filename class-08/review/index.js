'use strict';

// we do this here
require('dotenv').config();
const server = require('./lib/server.js');

const PORT = process.env.PORT || 3000;

server.start(PORT);

