'use strict';

/**
 * Driver Module
 * @module
 * 
 */

const events = require('./events');
const t = require('./timestamp');

events.on('package-ready-for-delivery', handleGoGetPackage);

function handleGoGetPackage(payload) {

  setTimeout(function () {
    console.log({ event: 'DRIVER: picked up package', time: t.t, payload});
    events.emit('package-in-transit', payload);
    setTimeout(function () {
      console.log({ event: 'DRIVER: package delivered', time: t.t, payload});
      events.emit('package-delivered', payload);
    }, 3000);
  }, 1000);
}

