'use strict';

const mongoose = require('mongoose');

// define data types that our entity needs to solve problems
const breadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
});

module.exports = mongoose.model('bread', breadSchema);