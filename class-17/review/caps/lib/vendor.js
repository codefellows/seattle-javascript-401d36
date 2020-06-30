'use strict';

/**
 * Vendor Module
 * @module
 */

// when .env is indefined and you need to provide a path
// require('dotenv').config({ path: '../.env' });
require('dotenv').config();
const events = require('./events.js');
const myStore = process.env.STORE_NAME;
const faker = require('faker');
const t = require('./timestamp');
require('./caps');

// HANDLERS
function generateOrder(storeName, orderId, customerName, address) {
  let payload = {
    storeName: storeName,
    orderId: orderId,
    customerName: customerName,
    address: address
  }
  // HINT: Have some fun by using the faker library to make up phony information
  console.log({ event: 'VENDOR: Package ready to deliver to customer', time: t.t, payload })
  events.emit('new-package-available', payload, t.t);
}

function handleDeliveryComplete(payload) {
  console.log({ event: 'VENDOR: Thank you, enjoy your product!' });
}

// EVENT LISTENERS
events.on('delivery-complete', handleDeliveryComplete);


// Every 5 seconds, simulate a new customer order

// potential for running our interval a specific number of times.
// let count = 0;

// function runTwoTimes(count) {
//   count++;
//   let myInterval = setInterval(() => {
//     generateOrder(myStore, faker.fake('{{random.number}}'), faker.fake('{{name.lastName}}'), faker.fake('{{address.streetAddress}}'));
//   }, 3000);

//   if (count >= 2) {
//     clearInterval(myInterval);
//   }
// }
let myInterval = setInterval(() => {
  generateOrder(myStore, faker.fake('{{random.number}}'), faker.fake('{{name.lastName}}'), faker.fake('{{address.streetAddress}}'));
}, 3000);
clearInterval(myInterval);
// generateOrder(myStore, faker.fake('{{random.number}}'), faker.fake('{{name.lastName}}'), faker.fake('{{address.streetAddress}}'));