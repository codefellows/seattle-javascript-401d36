'use strict';

const superagent = require('superagent');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const tokenUrl = 'https://github.com/login/oauth/access_token';
const remoteUserUrl = 'https://api.github.com/user';
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const apiServer = 'http://localhost:3000/oauth';

let SECRET = 'secretsignature';

module.exports = async function authorize(req, res, next) {
  let code = req.query.code
  // console.log('access code', code);
  try {

    let access_token = await exchangeCodeForToken(code);
    console.log('ACCESS TOKEN : ' + access_token);

    let user = await getRemoteUserInfo(access_token);
    console.log('GITHUB USER : ', user.body);

    let appUser = await getUser(user.body);
    console.log('OUR APP USER : ', appUser);

    req.user = appUser.user;
    req.token = appUser.token;
    next();
  } catch (e) {
    next(e);
  }

}


// service provides a CODE => TOKEN
async function exchangeCodeForToken(code) {
  console.log(code);
  let tokenResponse = await superagent.post(tokenUrl).send({
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: apiServer,
    grant_type: 'authorization_code'
  });

  let access_token = tokenResponse.body.access_token;

  return access_token;
}

// exchanging TOKEN for user information
async function getRemoteUserInfo(token) {

  let userResponse = await superagent.get(remoteUserUrl)
    .set('user-agent', 'express-app')
    .set('Authorization', `token ${token}`);

  let user = userResponse;

  return user;
}

// Do proprietary (use our own server resouces) user stuff.
async function getUser(user) {

  let userObject = {
    username: user.login,
    password: await bcrypt.hash('oauthuserpassword', 5),
  }

  let token = await jwt.sign(userObject, SECRET);
  // we can do user like stuff here.
  // let User = await user.save(userObject);
  // let token = users.generateToken(User);

  return { user: userObject, token };
}