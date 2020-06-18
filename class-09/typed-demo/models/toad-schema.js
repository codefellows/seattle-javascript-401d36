'use strict';

const mongoose = require('mongoose');

// define data types that our entity needs to solve problems
const toadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  color: { type: String }
});

module.exports = mongoose.model('toad', toadSchema);