'use strict';

//File that's used to start the app

/**
 * Start App
 * @module index
 */

require('dotenv').config();
const server = require('./src/server.js');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('open', () => {
  console.log('connected to mongo');
});

server.start(PORT);

