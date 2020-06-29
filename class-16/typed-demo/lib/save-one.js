'use strict';

const events = require('./events.js');

events.on('save', (payload) => {
  console.log(`Saves ${payload.id}`);
  events.emit('cache-update', payload);
});