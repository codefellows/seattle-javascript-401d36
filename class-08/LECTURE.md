# Class 08

## Warm Up

- What is Express?
  - Garhett: handles requests and responses between client and server!
    - Paul: these are features of HTTP.
  - David: a js library.
- What is a route / routing (in http)?
  - Ashley: A file location.
  - David: GET, PUT, DELETE - methods (Jacob: this is part of the route)
  - Paul: path to executable code.
  - Jacob: in express this means, a trail to a function that will run, given the proper method, path, headers.
- What is Middleware?
  - David: packages used somewhere in the middle of our routes.
  - Dave: a piece of code that runs in the middle of a request.
    - Jacob: we DONT consider functions that send the response middleware.

## Review

- Paul Votes lab!
- Sounds like lab is gonna win out.

- Things to cover
  - Puts and deletes
  - Getting the proper data types in our routes.

## Routing Middleware
- How can we make our routing functions a little more organized
  - Express gives us a Router constructor, that let's us use a router as (express) middleware.
  - We can export this as it's own module to attack to our main application.

## Adding Mongoose to our applications