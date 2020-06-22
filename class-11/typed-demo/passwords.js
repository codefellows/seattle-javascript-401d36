'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');

let encodedUsername = base64.encode('Jacobisaninstructor');
let decodedUsername = base64.decode(encodedUsername);

console.log(encodedUsername);
console.log(decodedUsername);

// bcrypt.hash('Jacob', 5).then(hashedString => console.log('hashed string ' + hashedString));
async function encrypt(str, complexity) {
  // this is now a secure.
  const hashedString = await bcrypt.hash(str, complexity);

  return hashedString;
}

encrypt('Jacob', 5)
  .then(async (encryptedString) => {
    console.log(encryptedString);

    const isValid = await bcrypt.compare('Jacob', encryptedString);

    console.log(isValid);
  });
