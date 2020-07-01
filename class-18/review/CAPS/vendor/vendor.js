'use strict';

/**
 * Vendor Module
 * 
 * Declare your store name (in .env)
 * Every 5 seconds, make a customer order
 *  {storename: "", orderId:"", customerName:"", address:"" }
 * User faker to generate random user data
 * monitor the system for "delivered" events and console log "thank you"
 */
const net = require('net');
const faker = require('faker');

const storename = process.env.STORENAME || 'TEST_STORE';

const Client = new net.Socket();
Client.connect(3000, 'localhost', () => {
  console.log('Vendor to Server');
});


async function randomOrder() {
  let orderIdNumber = await faker.random.number();
  let customerName = await faker.name.findName();
  let address = await faker.address.streetAddress();

  let payload = {
    storename: storename,
    orderId: orderIdNumber,
    customerName: customerName,
    address: address,
  };

  Client.write(JSON.stringify({ event: 'cache-update', payload: payload }));
  Client.write(JSON.stringify({ event: 'package-ready-for-delivery', payload: payload }));
}



Client.on('data', (buffer) => {
  let message = JSON.parse(buffer.toString());
  console.log(message);
  if (message.event === 'delivered') {
    delivered(message.payload);
  }
});

function delivered(payload) {
  console.log(`Thank you for delivering ${payload.orderId}`);
}

function sendOrders() {
  setInterval(randomOrder, 5000);
}


sendOrders();