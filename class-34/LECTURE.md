# Class 34: Auth Components!

## Code Review: Hooks and Context

- Paul: Pagination with React-Bootstrap
- See Review Folder

## Review of Auth

- Auth API Server
  - Routes
    - What's an express route?
      - slash something => endpoint
      - HTTP request with a url, headers, as well as parameters / query strings ....
      - Jacob: A place to handle incoming http Requests.
  - Route Handler
    - A function! That does something with that request.
    - Deals specifically (in express terms) a request object, response object, next function (for triggering middleware!!)
  - Middleware
    - Code that running in between the request coming in and the response going.
    - What is the Main feature of an express function gives the middleware it's powers:
      - Ashley: the next function is what gives middelware the power to exist in between other middlewares / handlers.
- Basic and Bearer Authentication
  - Garhett: Basic takes in "key" and creates token. Bearer takes in a token, and validates it using some validation in order make sure that a valid user is requesting resources.
  - Jacob: Basic is signup / signin "string based". Bearer is requesting resouces from a already recieved token.
    - Go from Basic => Bearer.
- Access Control List
  - Our Authorization system.
  - Tacked onto our bearAuth Middleware: `beareAuth() => acl('read')`
  - Role based permission system.
    - Map a list of Role, to a list of capabilities.

## Auth and Login Component

