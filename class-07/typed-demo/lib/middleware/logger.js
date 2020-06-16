'use strict';

// in order to function as express middleware, we need at least 3 parameters 
module.exports = (request, response, next) => {

  console.log('__REQUEST__ ::' + ` ${request.path}` + ` ${request.method}`);
  // in order to move to the next handler function
  next();
}