'use strict';

const schema = require('./bread-schema.js');
const Model = require('../mongo-interface.js');

class Bread extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Bread;