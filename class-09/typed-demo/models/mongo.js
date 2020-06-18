'use strict'

class Mongo {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let params = _id ? { _id } : {};
    return this.schema.find(params);
  }

  create(data) {
    const newModel = new this.schema(data);
    return newModel.save();
  }

  update(_id, data) {

  }

  delete(_id) {

  }
}

module.exports = Mongo;