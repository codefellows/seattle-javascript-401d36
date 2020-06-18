# Class 09 Param Middleware

## Warm Up Exercise

- build a very simple server that can perform mathematical operations based on a url
  - GET @ `http://localhost:3000/add/1/2/3/4/5` => `15`
  - GET @ `http://localhost:3000/sub/1/2/3/4/5` => `-5`
  - stretch goal: GET @ `http://localhost:3000/sub/1/2/add/3/4/5` => `11`

```js

const express = require('express');

const app = express();

// /add route sums all the numbers in the path together

app.get('/add/*', (req, res) => { // default way to get a variable from our url
  
  let numbers = req.params[0].split('/');
  
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += parseInt(numbers[i]);
  }

  res.send(result);
});
```

## Code Challenges

- mergeLists challenge
  - Prompt: 


- Ashley: Approaching Algorithms.
- Dave: Better approach to writing tests.

## Code Review

## Param Middleware

## Demo: Dynamic Routing

