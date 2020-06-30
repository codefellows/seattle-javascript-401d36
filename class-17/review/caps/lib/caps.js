'use strict';

/**
 * Main Hub Application
 * Manages state of packages (ready for pickup, in transit, delivered, etc)
 * Logs every event to the console with timestamp and event payload
 */

const events = require('./events.js');
const t = require('./timestamp.js');
// require('./vendor'); Just a little redudant for this project structure, but no real issue.
require('./driver');

// event listeners
events.on('new-package-available', handleNewPackage);
events.on('package-in-transit', handlePackageInTransit);
events.on('package-delivered', handlePackageDelivered);

// Event Handlers
function handleNewPackage(payload) {
  events.emit('package-ready-for-delivery', payload);
}

function handlePackageInTransit(payload) {
  console.log({ event: 'CAPS: IN TRANSIT', time: t.t, payload })
  events.emit('in-transit', payload);
}

function handlePackageDelivered(payload) {
  console.log({ event: 'CAPS: Package delivered', time: t.t, payload });
  events.emit('delivery-complete', payload);
}