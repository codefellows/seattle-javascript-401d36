'use strict';

// our monolithic event libary 

// libary that allows us to create and responds to events that we define.
const EventEmitter = require('events');

const events = new EventEmitter();

// observers, subscribe to events, listens for commands from the subject.
events.on('save', handleSave);
events.on('update', handleUpdate);
events.on('cache-update', (payload) => { logger('The storage was updated', payload) });

function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);
  events.emit('cache-update', payload);
}

function handleUpdate(payload) {
  console.log(`Record ${payload.id} was updated`);
  events.emit('cache-update', payload);
}

function logger(event, payload) {
  let time = new Date();
  console.log({ event, time, payload });
}

// pretend another module far far away does this

// these a publishing the events as neccessary
// The publisher / subject commands other machines to do whatever work those machines are designed.
events.emit('save', { id: 100, name: 'Jacob' });
events.emit('update', { id: 101, name: 'Alistair' });