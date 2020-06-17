'use strict';

require('dotenv').config();
const server = require('./lib/server.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});

server.start(3000);