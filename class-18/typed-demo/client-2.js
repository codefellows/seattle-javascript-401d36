'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/js-401d36');

socket.emit('auth', { name: "Jacob", role: "instructor" });
socket.emit('code', 'Here is some js specific stuff');

// socket.on('auth', (payload) => {
//   console.log(payload);
// });

socket.on('code', (payload) => {
  console.log('client side payload', payload)
});

socket.on('whiteboarding', console.log);