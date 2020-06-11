'use strict';

const superagent = require('superagent');
const RequestModel = require('./request-model.js');

class Request {
  constructor(opts) {
    this.method = opts.method;
    this.url = opts.url;
    this.body = opts.body || null;
    this.response = null;
    this.error = null;
  }

  fetch() {
    // accessing properties by variable name: use square brackets

    return superagent[this.method](this.url)
      .then(response => {
        this.response = response;
        return this.save()
          .then(() => this.response);
      })
      .catch(err => {
        this.error = err;
        return this.error;
      })
  }

  save() {
    const newRequest = new RequestModel({ url: this.url, method: this.method, body: this.body });
    return newRequest.save()
      .then(() => console.log('request saved'));
  }
}

module.exports = Request;