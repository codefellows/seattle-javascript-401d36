'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

let int = 1;
setInterval(() => {
  socket.emit('greeting', `Hello ${int}`);
  int++;
}, 200);