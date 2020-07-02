'use strict';

const someFunction = require('../index.js');

function handleMessage(payload) {
  const time = new Date();
  console.log({
    event: 'message',
    message: payload,
    sentAt: time,
  });
}

module.exports = {
  handleMessage,
  room: 'nighttime',
}