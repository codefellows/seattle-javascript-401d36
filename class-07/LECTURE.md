# Class 07

## Warm Up / Code Review
- what is HTTP?
  - Ashley: hyper text tranfer protocol, sharing text (data) between computers.
- What 2 sides of an HTTP communication event (request)?
  - Krystal: request & response.
- Where does the response & request come from?
  - Request comes from the client and the response comes from the server.
- 2 things that all requests need?
  - Paul:
    - Path to make the towards
    - Method: the type action that we're performing.

- What is the differnet between HTTP and REST?
  - Marlene: HTTP is the communication method, REST is prescribed rules for using HTTP to interface with an application.
- How should a RESTful HTTP path look, for example listing all of our potatoes?
  - Make sure this method: GET
  - `http://some-origin.com/potatoes`
    - http:// = protocol
    - some-origin.com = origin
    - /potatoes = path
- If we wanted to create a potatoe, what needs to change?
  - Paul: same path, change the method to POST

## Express

- What is Express?
  - Its library designed to create RESTful API servers.
  - Goal: create a non opiniated API ( in the sense that it has a programmable interface ) to handle an HTTP request and response.
    - non-opiniated: it doesn't prescribe any workflow. Let's you own functions, and as long as you handle the request and response, it really doesn't care what you do.
      - We can plug any functiono we right into an 'route handler'.
- What is Routing?
  - routing a request is just simply using a function to handle an incoming requests (using the path and method).  Must utilize the response.

```js

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
// Jacob: the first argument in out route handler, is our path, the second argument is our handler
  // handler => callback function, that utilized our request and oour response
app.get('/', function (request, response) {
  response.send('hello world');
});

app.post('/user', function(request, response) {

  // authenticate user / creatiing a user

  response.send(user/?);

})

// hopefully looks at an entity / resourcce
app.get('/potatoe', function(request, response) {
  // send back all of our potatoes
  const allPotatoes = db.fetchPotatoes();

  // always do somehting with response here
  response.send(allPotatoes);
})
```

- Garhett: Yesterday we utilized routes.
  - Today we are configuring routes

## Middleware

- Simply code that runs in between other code.
- Inn Express, middleware is a function that sits between a request and a response.
- Middleware has an order of operations.

## Testing Express Libraries
- See test folder in typed-demo