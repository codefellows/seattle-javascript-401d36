'use strict';

const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  url: { type: String, required: true },
  method: { type: String, required: true },
  body: { type: String },
});


// post hook makes changes AFTER a mongoDB event was fired
requestSchema.post('find', function (results) {
  results.forEach(data => {
    data.url = 'permission denied';
  });
});

// here is where we can define "middleware" on our data
// quick note: when we are talking to the mongoose schema, we can't use fat arrow function?
// scroping: fat arrows don't bind 'this'
requestSchema.pre('save', function () { // pre hooko fires before the event finishes.
  this.method = this.method.toUpperCase();
});

module.exports = mongoose.model('request', requestSchema);