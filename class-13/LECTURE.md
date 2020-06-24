# Class 12 Bearer Authentication

## Warm Up

- Oauth?
  - How would you describe Oauth process?
    - Dave: Tideous and time consuming
    - Paul: You'll need 3 urls to send / receive data between 3 different "machines".
      - You'll need to handle 3 AJAX events.
    - Marlene: 3 way handshake.
- Things we now realize are very important?
  - Paul: secrets string are important (if not extremely esoteric)
    - (spotify) 2 kinds: One from the developer, one that you create.
  - Garhett: Linked in requires a company, if not we can't get our ids & tokens.
  - Jacob: Registering your application
    - All the secret / validating things (CLIENT_SECRET / redirect uris / home page / CLIENT_ID);

## Code Review

- Let's Maybe try and get another service working!
- Dave: yesterdays lab:
  - The purpose, using all the functionality from the demo. Do some research into another oauth provider, and use the code to get it working.
    - fallback to github.

## Bearer Tokens

- The whole goal of Basic and Oauth, is to create this Token
  - What the heck the Token, comlete access to the things that a user can typically.
  - Today we are adding a system that can validate tokens
- Token is now something that needs to be present on any authenticated route.
  - New Auth header; `Authorization`: `Bearer aowiehfjan98273408972q34hjbvDJHLIUhgdf` 
    - This token is includes as a header, what does the token contain
      - contains information about the user.
- we're adding onto our auth middleware, so that we can not only validate strings but also validate tokens

## Demo

- let's add on to our middlwares,
  - We've gone over basic auth / oauth.
  - Noe let's add a function (similar to basic), this one will verify tokens.