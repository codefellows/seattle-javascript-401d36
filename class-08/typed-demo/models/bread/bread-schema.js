'use strict';

// this is all we need to do mongoose stuff in our app
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
});

module.exports = mongoose.model('bread', schema);