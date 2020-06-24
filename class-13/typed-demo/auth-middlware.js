'use strict';

const users = require('./users.js');

// middleware, so we need the 'next' function
async function bearer(req, res, next) {

  // check auth headers
  if (!req.headers.authorization) {
    res.status(401).send('No Auth headers present');
  }

  // why split 'Bearer some-token another-string'
  // let authtype = req.headers.authorization.split(' ')[0];
  // let authString = req.headers.authorization.split(' ')[1];

  let [authType, token] = req.headers.authorization.split(' ') // => ['Bearer', 'some-token']

  let validUser = await users.validateToken(token);

  if (validUser) {
    req.user = validUser;
    next();
  } else {
    next('Invalid Token')
  }
}

module.exports = {
  bearer,
}