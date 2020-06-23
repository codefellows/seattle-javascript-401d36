'use strict';

//This sets up the mongoose schema for users.

/**
 * Users schema
 * @module users-schema
 */

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String},
  fullname: {type: String},
  role: {type: String}
});

module.exports = mongoose.model('user', usersSchema);