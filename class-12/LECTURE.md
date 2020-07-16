# Class 12 Oauth

## Warmup

- What is Authentication?
  - Checking to see if two things are supposed to be connected.
  - Allowing permissions ( authorization ).
  - is someone or something who they say they are!
  - Is a thing authentic, we're mostly thinking users.
- What is basic Authentication?
  - String based.
    - simplest way to get a user to come with something that only they might possess.
  - Usually base-64. (managed using base-64 encoding).
- Bearer Authentication.
  - Uses an encoded token (comes from a library).
    - signed with a secret string.

## Lab Review

- Thanks Marlene :)
- Paul: Dynamic routing

## Authorization as services

- We know now that authentication is an invovled concious effort to pass data back and forth
  - between js and db and validation.
  - Maybe we dont' want to mess with any of that!
    - We still need our user model

- Oauth to the rescue:
  - Basic explanation:
    - 3 way handshake
      - client (web browser)
      - resource server (our API)
      - authentication server (google, facebook, github ...)
        - any service that tracks a user, could implement this workflow.

## Oauth Workflow

 - The actual flow of information looks pretty weird:
   - step 0: authorize our app as an app that uses the auth server
   - step 1: user gives information to the authorization server.
     - we have a popup in our client facing ui, which contains a form, with information about our server(clientID) and authservice (url to send a auth request).
   - step 2: auth service sends a request to our API server, containing a code.
   - step 3:  API server, makes a request back to the Auth server, exchanging the code for a token.
   - step 4: AUth Service decides whether or not to send back a token.
     - the token can be used to access this single persons data.
   - step 5: use token in exchange for user data.
   - step 6: create a user on our system
     - Once we create our user, we have a username, maybe an email
   - step 7: send back our own token.


## Github Oauth
- See demo folder
