'use strict';

// now we have 4 parameters, the first is an error that gets passed from a previous middleware
module.exports = (err, request, response, next) => {
  console.log('__ERROR!!__ :: ', err);
  response.status(500).send('Server error');
  // next();
}