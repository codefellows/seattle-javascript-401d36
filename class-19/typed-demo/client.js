'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');


socket.emit('fetchMessages');

socket.on('greeting', payload => {
  console.log('Message received', payload);
  socket.emit('received', payload);
});