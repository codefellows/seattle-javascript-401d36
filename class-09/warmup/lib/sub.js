'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
  <h1>Subtraction Route: </h1>
  <p>subtract numbers by plutting them in your path</p>
  <ul>
    <li><pre>/-/2/3 => 5</pre></li>
  </ul>
  `)
});

router.get('/*', (req, res) => {
  const numbers = req.params[0].split('/');
  const sum = numbers.reduce((sum, num) => sum -= parseInt(num), 0);
  console.log(req.params[0].split('/'), sum);
  res.send(`The difference between ${numbers.join(' ')} is ${sum}`);
})

module.exports = router;