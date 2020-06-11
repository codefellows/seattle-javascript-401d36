'use strict';

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  category: { type: String, required: true },
  note: { type: String, required: true },
});

module.exports = mongoose.model('note', noteSchema);
