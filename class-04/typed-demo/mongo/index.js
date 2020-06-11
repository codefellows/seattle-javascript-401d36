'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
// const Request = require('./request-model.js');
const Request = require('./request.js');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose calls this event initialization
const getRequest = new Request({ url: 'https://codefellows.org', method: 'get' });
getRequest.fetch();

// // 'save' event
// getRequest.save()
// //   .then(result => console.log(result));

// Request.find()
//   .then(results => console.log(results));