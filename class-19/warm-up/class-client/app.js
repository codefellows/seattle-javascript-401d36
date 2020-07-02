'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/js401');

roomToBeJoined(); // the welcome string is whatever the other group decides.
socket.on('message', getCoffee);
socket.emit('message', 'we are the client, now open sesame!');

function roomToBeJoined() {
  let date = new Date();
  let currentTime = date.getHours();
  if (6 < currentTime < 18) {
    socket.emit('join', 'nighttime');
  } else {
    socket.emit('join', 'daytime');
  }
};

function getCoffee() {
  console.log('grabbing Starbucks, be right back!');
}
