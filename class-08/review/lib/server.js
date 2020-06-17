'use strict';

// file for server logic
const express = require('express');

const app = express();

// adds our encoded request body data to expresses request object.
app.use(express.json());

const products = [];
const categories = [];

// defining routes
app.post('/products', (req, res) => {

  // some object attached to the request
  products.push(req.body);
  res.send(req.body);
});
app.get('/products', (req, res) => {
  res.send(products);
});
app.get('/products/:id', (req, res) => { });
app.put('/products/:id', (req, res) => {
  // find the products in products by an id
  // how can we get the id from our request

  const productId = req.params.id;

  // change info from out array and send it back
  products.forEach((item, idx) => {
    console.log(parseInt(productId), item.id);
    if (parseInt(productId) === item.id) {
      console.log('swapping products');
      products[idx] = req.body;
    }
  });
  res.send(req.body);
});
app.delete('/products/:id', (req, res) => { });

app.post('/categories', (req, res) => {
  // some object attached to the request
  categories.push(req.body);
  res.send(req.body);
});
app.get('/categories', (req, res) => {
  res.send(categories);
});
app.get('/categories/:id', (req, res) => { });
app.put('/categories/:id', (req, res) => { });
app.delete('/categories/:id', (req, res) => { });


module.exports = {
  // server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log('server is up :::' + port);
    });
  }
}