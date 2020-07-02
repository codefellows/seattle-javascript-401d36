'use strict';

const io = require('socket.io-client');
const chat = require('./lib/chat.js');

const socket = io.connect("http://localhost:3000/js401");

socket.on('message', (payload) => chat.handleMessage(socket, payload));
socket.emit('join', chat.room);
socket.emit('message', "Hello from jacob client");