# Class 43

## DSA Warm up

- How would you build a vending machine?
- Class based react system??
  - Garhett and Ashley: Focused on the interface!
    - state based products
    - create list items
      - 3 'methods' for our machine
  - Dave and David: conceptual system
    - Build some type sensor
    - 3 "functions"
      - inventory: CRUD for inventory.
      - financial: senses for handling currency ( 1 - dollar bills vs 2 - electronic transaction).
        - handles transaction between parties.
  - Paul and Marlene: started with the interface
    - Vending machine "object" with key value pairs.
      - keys represent the row of the machine
      - values are represented as the items in the row.
      - keypad interface
        - system used keypad to locate items in rows.
      - handles transaction of both cash and cards.
      - "Object" for handling currencty exchange.
      - Jacob: This sounds a lot like a hashmap ;)

Design Challenges
  Design like theses often look for an Object Oriented approach.
      - How may type of things do you need?
        - class VendingMachine
        - class Sensor
        - class Inventory

## Debrief on React Native

- React Native is tough.
  - We are Developers / Engineers, we aren't exactly DevOps specialists.
    - As such we are wearing 2 hats when we develop with React Native (at the moment);
- When it works its awesome!!
  - Putting a logo on the screen!!
  - You should see these little steps, as actually monumental.

## Typescript Fundamentals

- What is Typescript?
  - a superset of javascript
    - all javascript is valid typescript, adds syntactical features to the langauge
      - Strict typing system ( addsd types ).
      - What type if this vairable?
  - A compiler for our javascript!!

```js

// this is type "Number"
// the only thing making this a number, is javascript dynamically assigning this type.
var number = 3; // javascript does this assigning of type, under the hood.

//This does not fly in other langauges, they like to keep a manifest of all things that the code needs.
```

```java

// object oriented language NEEDs this
int number = 0; // wants to be able to check all functions and operations against "manifest"

```

- Adding the ability to strictly type our variables / functions /other features of the language

- Why??
  - This makes our programs easier to manage
  - The more complex our programs the more runtime erros we have overall.
  - A compiler from a strictly tpes language will find these inconsistencies and make you adjust your code.
  - The compiler keeps us in check from writing hacky code, that just works.
    - scripting vs programming
    - Large programs / systems should be thought out and their output preplanned.
  - Large development / expereince senior developers, really like having a compiler to manage their code.

```js
// The ability to let these change.
function myFunc(value) {
  if (typeof value === 'object') {

  }
  .....

  return false;

  return [ ]
}

myFunc({number:4});

```

DEMO TIME

Basic types:
  - string
  - number
  - boolean
  - array: Array<any> / any[]
  - any: unspecified
  - tuple: bucket of predtermined "things" [number, setNumber]

- What happens when our return value or our parameters are complex.

Interface
  - contract for functions and classes.
  - "I'm defining a more complex type"




### Full Stack applications with Typscript

- Back end today
- Front end tomorrow

## Projects

- Full Stack Project Ideas!!
  - Garhett:
    - MVP: Ethos legal ( Upwork meets legal field: depositions /  )
      - Distributed application strucuture
        - attorney app ( contractor ) ?
        - fulfiller ( paralegals / juris-doctorates / freelancer ) app?
        - backend application
          - 3 teams of pairs??
      - MVP design is done!
      - Too ambitiuos for the week?
  - Paul:
    1) revisit medical marijuana tracking app.
    - MERN stack app that tracks user inputs and provides results / suggestions / notifications depending on preferences from the user.
    2) Roll 20
    - Plugins for other games??
    - DND game application interface.
  - David:
    - LinkedIn for politics
      - "Unbiased platform" for politicians and consituents to engage together.
      - Organized by causes.
      - Role based.
        - Users:
          - "causes"
          - "profiles"
        - Admins
      - "Organizations"
      - "Posts"
      - MVP: create users, creating cuases, subscribe to causes, create "posts".
      - Competitve analysis: facebook / linkedIn
- team composition
  - 6 people vs 2 teams
    - Deligation of tasks?

### Roll20: a dice game with multiple players?

- Supertask??
  - Connect 4 people to the same viewable station / dashboard / view!
    - How do you join a game??
      - Do you you need an invite?
    - Who is the boss / game admin?
    - Socket Stuff
      - Socket.io
      - Web Sockets?
    - React components
    - How Auth?
    - DATA MODELLING!!!!!
      - Users / Player
      - Game??
        - Rules??
        - Board??
        - Player??
      - Table?
  - Play a DnD game?
  - Play a game via a template?
- MVP
  - 
