# Class 11 Authentication and Authorization

## Warm Up

- How can we reverse a string using either a stack or a queue?
 - Paul: Pop and enqueue wil have the same outcome.
   - take strings, splice into an array.
   - use push / enqueue to use values in the array.
- Ashley: spliting strings a putting and using the array.

```js

// dealing with string types
'test' => ('t', 'e', 'st');

// stack will be the easiest.
['t' 's' 'e' 't']


// now we can just pop these off

['t' 's' 'e' 't'] // pop give us 't'

['s' 'e' 't'] // pop again gives us 'ts'

// continues to pop until our iteration is done.

=> 'tset'

// uses Stack to reverse a string
//  assume that we have a class Node and Stack  
function stringReverse(str) {

 // makes sure that Node is defined.

 let stringStack = new Stack();

//  let stringStack = []; => works just like stack in terms of behavior.
 let results = '';

  // how can we put string characters into the stack.
  for (let i = 0; i< str.length; i++){
    stringStack.push(str[i]);
  }
  for (let i = 0; i< str.length; i++) {
    result += stringStack.pop();
  }

  return result;
}
```

## Code Review (Express API Stuff)
- Heroku deployment issues:
  - Things run fine on localhost, requests work just fun, db works
  - Upload to heroku and everything breaks? :(
    - Throwing a 500 everytime (that you wrote).
      - What integrations need examining.
      - What are your logs => heroku app / top right right more button / check out logs.
  - Ashley: getting things up and running => will we need this forever??
  - Paul: video for deployment stuff? (TODO: Jacob)
  - Dave: What is DevOps
    - Development Operations
      - managing a code base, to get code to run where / how it needs to run.

## Authentication

- "Authentication" -> "who am I?"
- Most apps want to display different content / different layout / differenet abilites, depending on who is using the app.
  - username, friends list, messages, notification.
  - Getting user centric data.
- What this means more often than not: username / email / password.
  - We call this string based (basic) authentication, let me validate them.
    - This system is not very secure (two string do make up who we are).
      - 5 factor authentication (this should be the standard / it takes absurb amount of effort and time to implement).
      - Biometrics. (ideally how we should be authenticating).
      - (UX) is bad with 5 factor.

- Our String Base Systems is the most straight forward.
- First thing a user needs, is a token (which associated a computer, with a "User").

## Encryption / Encoding

- Encoding is simply the reorganiztion of characters for data maintainability. (base64 because a systems handles this better. Pig Latin). We can run the same algirthm to encode and decode.
  - Our auth will use base64 encoding. reducing some charcters, to fit our auth system.
- Encyption: is the use of an alogithm to hide information, to make it hard to get any useful data from an encrypted string.  Whatever algorithm made the encryption artifact cannot be used to de-encrypt (often you need a key).
  - One way encryption => think of the output is a completely secure artifact.
    - The only way to get info back, is to pass the same arguments into our algorithm.
    - No sensitive text, persists. Never save plaintext password.

## Demo

- How does this system all fit together.