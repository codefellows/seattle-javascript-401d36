'use strict';

/**
 * EventsEmitter
 * @module events
 * Creates a new instance of EventEmitter, calls it events
 * Acts as broadcast central for the CAPS system, Global Event Pool shared by all
 */

const EventEmitter = require('events');
const events = new EventEmitter();
const t = require('./timestamp.js');

events.on('package-ready-for-delivery', (payload) => {
  console.log({ event: 'Package Ready for Delivery', time: t.t, payload });
});

events.on('in-transit', (payload) => {
  console.log({ event: 'In Transit', time: t.t, payload });
});

events.on('delivery-complete', (payload) => {
  console.log({ event: 'Delivery Complete', time: t.t, payload });
});

module.exports = events;