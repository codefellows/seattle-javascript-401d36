# Class 41

## What our week looks like

- Last week of 401 :) :(
- Resubmissions / finalize applications from previous weeks
- Lots of discovery of topics
  - Tip of spear for advanced Javascript tools / design patterns
  - What technologies do I want to use for project week?
- Project week kickoff: Friday.
  - Thinking of project ideas.

### Main Topics this week

- Mobile App stuff
  - 2 days of react native
- Typescript / esNext
- Other Ideas?
  - Flutter?
  - Multiplayer / live updated server stuff.
    - Review of sockets. / Open TCP connections.

#### Review Topics

- Basic / Bearer Auth?
  - We can definitly review this
- DSA stuff?
  - do some code challenge warm ups.
  - Taking concepts from our knowledge base and applying.


### Review: Auth

3 types of Authentication

- Difference between authentication and authorization?
  - authentication: who are you?  Do I know you at all?
    - Basic / Bearer (token based authentication)
  - authorization: Are you allowed to perfrom the thing you want?
    - free tier, vs paid tier.

- Basic / Bearer
  - Basic: taking some strings and assigning them to a user.
    - Produces something that can identify that user within an application.
  - Bearer: Using that identifier to do something on that system / application.
- Oauth: Utitlizing a 3rd party to produce the same outcoming.  
  - Main benefit, we don't have to deal with user strings / our own system for identifying users.
  - Why do companies provide Oauth?
    - User data is big money.

```js

// express application

const express = require('express');

const app = express();

// basic? / This one takes in strings and produces and identifier
app.post('/signin', (req, res) => {

  // is there and authorization header
    // most REST APIs, require a specific header to authenticate with string
  req.header.authorization === {'Authorization': "Basic asW-38BfhSbz"}

  // Industry standard is username:password encoded in base64
  user.decodeBasic(req.header.authorization) === 'username:password'

  // validate the username, validate the password and send a token
  user.find(username)
  user.valudateToken(password);
});

// basic? / completely unauthenticated but it is required for our initializing a basic auth.
app.post('/signup', () => {

  // create a user
  const user = new User(username, password);

  // send them the result of the creation process
  res.send(user.token);
});

// if we want to only let our users access this, we need bearer auth
app.get('/message', (req, res) => {

  // we can rip out the token pretty easily
  req.header.authorization == { 'Authorization': "Bearer ajhfajsdfgasdfv163541675234jhasdfua7t614.nGGFSYF"}

  // get decoded info from token
  req.header.authorization.split(' ') === ['Bearer', 'ajhfajsdfgasdfv163541675234jhasdfua7t614.nGGFSYF']
  let tokenEncodedInfo = jwt.verify(token, SECRET);
})

```

## Native Mobile App Development

- Running and application on compiled device code.
- There's a lot of complications
  - Device type:
    - Phones / Tables / Hybrid
    - Operating systems ( iOS, Android ).
      - We need code that can compile of both machines, and create an exectable.
  - As JS developers, we write most of our code, to run in a browsers.
  - There are very straightforward solutions
    - Mobile frameworks
      - Flutter
      - Xamarin
      - React Native
    - Bridging the once monumental of creating executable code from JS.
      - Creating 2 whole executable code bases, one in objective C (iOS), one in Java ( Android )

## React Native Framework

- Managed Workflow
  - Using a framework / tool, that manages all the devOps decisions for you.
  - Follow a set of guidelines to acheive a predicted outcome.
    - Developement & publication
  - Bootstraps a complete application structure.
- React Native itself is just a library of react component, with no prescribed workflow.
  - We are going to add our own: expo.
  - Think of this like create-react-app / react-scripts but for mobile apps.
  - Why Can't we use a react app??
    - all the react knowledge still applies.
      - We are still using the exact same react code.
      - The only things that change
        - Where our code runs.
          - This requires a lot of config.
        - The JSX needs some massaging.
          - Using a component library (react-native);
- Let's look at Expo. Our workflow manager.
  - Step by step walkthrough of initializing an app
    - `npm install -g expo-cli`
      - installing our native app build tool.
    - `expo init project-name`
      - Wait for all dependencies to be installed.
    - `expo start` or `npm start`
- Taking our own React Code and putting into a React Native project.
  - The JSX will break your code.
  - Browswer specific code
    - window
    - document
- Gain the ability to talk directly to hardware specific features.
  - camera.
  - accelerometer.
  - phone calls.
  - text messages.
  - email client.
- Setting up a development build of a phone app, and running some executables.