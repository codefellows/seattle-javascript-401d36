'use strict';

const mongoose = require('mongoose');

// mongoose schema
// this is where you define your datatypes and some default specifications
// is it required, can it be null, whats a default value.

const requestSchema = new mongoose.Schema({
  url: { type: String, required: true },
  method: { type: String, required: false },
});

// mongoose model
//   this is our "class" that can use mongoose methods

module.exports = mongoose.model('request', requestSchema);