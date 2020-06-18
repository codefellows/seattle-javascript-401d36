'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
  <h1>Adding Route: </h1>
  <p>Add numbers togther by adding them to your path</p>
  <ul>
    <li><pre>add/2/3 => 5</pre></li>
  </ul>
  `)
});

router.get('/*', (req, res) => {
  const numbers = req.params[0].split('/');
  const sum = numbers.reduce((sum, num) => sum += parseInt(num), 0);
  console.log(req.params[0].split('/'), sum);
  res.send(`the sum of ${numbers.join(' ')} is ${sum}`);
})

module.exports = router;