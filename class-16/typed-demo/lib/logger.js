'use strict';

const events = require('./events.js');

events.on('cache-update', (payload) => {
  let time = new Date();
  console.log({ event: 'The cache was updated', time, payload });
});