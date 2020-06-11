'use strict';

require('dotenv').config();

// brings in our classes and dependencies.
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');

// connecint to mongo
mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', () => {
  console.log('*** Something is WRONG!! ***')
});
db.on('open', () => {
  // once we are in this code block we know we can do database stuff.
  console.log('Connected to atlas');
});

// uses our input constructor to create our input object
const input = new Input;

if (input.validate() === true) {
  let noteAction = new Notes(input);
  noteAction.execute();
  // addNotes.add(input);

} else {
  console.error('Houston, we have a problem!');
}