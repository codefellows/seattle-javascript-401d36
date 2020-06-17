'use strict';

class MongoInterface {

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let searchParam = _id ? { _id } : {};
    return this.schema.find(searchParam);
  }

  create(data) {
    let newObject = new this.schema(data);
    return newObject.save();
  }

  update(_id, data) {
    return this.schema// what method should we use
  }

  delete(_id) {
    return this.schema//
  }
}

module.exports = MongoInterface;