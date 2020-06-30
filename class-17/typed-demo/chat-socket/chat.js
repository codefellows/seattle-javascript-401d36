'use strict';

const net = require('net');
const inquirer = require('inquirer');

const Client = new net.Socket();

Client.connect(3000, 'localhost', () => {
  console.log('connected to server');
});

Client.on('data', (payload) => {
  console.log(payload.toString());
  // getInput();
});

// turns an object into a string
// Client.write(JSON.stringify({ message: 'Hello from chat!' }));

function sendMessage(text) {
  let message = JSON.stringify({ message: text });
  Client.write(message);
}

async function getInput() {
  const input = await inquirer.prompt([{ 'name': 'chat-client', 'message': '' }]);
  sendMessage(input);
}

console.clear();
getInput();