'use strict';

const express = require('express');
const add = require('./lib/add.js');
const sub = require('./lib/sub.js');

const app = express();

app.get('/', (req, res) => res.send(`
  <h1>Perform Math using your url!</h1>
  <p>try coping this into your url:<pre>http://localhost:3000/add/2/3</pre></p>
`))
app.use('/add', add);
app.use('/sub', sub);

app.listen(3000, () => {
  console.log('Perfrom math on : 3000');
});