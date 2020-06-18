'use strict';

require('dotenv').config();
// importing server module
const server = require('./lib/server.js');
const mongoose = require('mongoose');

// connecting to our mongo db
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// starting our server
server.start(3000);