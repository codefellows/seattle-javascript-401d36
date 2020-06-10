# Class 03 Mongo and Mongoose

## Warm-up
- What is a node module?
  - Garhett: a library of code that is accessible and usable in other code bases.
  - Joe: do they need to be from someone else.
  - Paul: a library of packages? That is accessible and modular.
  - Ashley: Each one has it's own little job.
  - Jacob: A self contained Javascipt library (a directory of code) that can be imported / required in any other node module / javscript library, using a syntax that works in the Node runtime environment.
  - Dave: They have their context.
    - `module.exports`

- What is `module.exports` object?
  - Dave: it's what is accessible to another file.
  - Paul: Pass data from file to file.
  - Jacob: It's our context for a node_module, can sort think as "this" for a node_module.

- What is the `process` object in node?
  - Garhett: the invocation of node (it is the result of the invocation);
  - Paul: An object of parameter ( a data ), that came from the invocation.

## Nomenclature
- Repository
  - A place where files are stored, where multiple people can view and possibly edit.
- Script
  - A file that contains code, should be as read from top to bottom and doing all the the script asks.
- Directory
  - ie: folder, branch of information that stored other directories and files. invloves a computers storage of files.

## Code Review
- Thanks for the code Ashley!
- index.js = entry file
  - The file that needs to be run first in our runtime.
- See Review directory for details :)

## SQL vs NoSQL
- Modeling Data
  - What does my data look like?
  - Entities?  An abstraction of a real world "thing"
    - are made up of data types (numbers, strings, booleans)
      - numbers ( mathematical or quantitive data)
      - strings ( data best represeted in a natural )
      - boolean ( things with binary state )
      - array ( reprensent similar types of data, in a group )
      - object ( represents multiple other data types grouped togther )
    - Examples
      - Users
      - Messages
      - Notes
      - Todos
    - Every entity should have a purpose.
      - User => persist User information
      - Message => contains natural language text that is meant to be read by other user.
    - When we decide what problems our entities solve, what data types do our entities need
    - User:
      - firstName
      - lastName
      - username
      - id
      - email
    - Message:
      - text
      - notifications: []
  - Behaviors, for our system:
    - create / reading / updating / deleting.
    - which entities can our system operate against.
- SQL is relational
  - not only do entities have data that points to another entity type, but it also makes sure that relation persists.
    - Prevents corruption of data using foriegn and primary keys.
    - This is a hige benefit when we need to worry sensitive.
- NoSQL is non-relational, we can still use ids and keys, to relate data, but there's no underlying safegaurd protecting our data.
  - Very flexible, mostly because it document (JSON) based, not table based.
  - Mongo uses JSON to store things
    - Very scalable both vertically and horizonatally.
    - More corruptable beause it lakes the safegaurds of a relational system.

## Mongo
- Our noSQL db of choice.
- Can be interfaced with a shell or by application.

## Mongoose
- Our JS library for connection to mongoDB
- ORM: Object relation mapping: software thats designed to move data between 2 seperate context.
- It's configured using all javascript type things, uses promises and class methods to do data persistence things.
