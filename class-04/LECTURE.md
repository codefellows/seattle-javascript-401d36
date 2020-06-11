# Class 04 Advance Mongoose features Testing modules that use MongoDB

## Warm up / Code Review
- What is MongoDB?
  - Dave: Web based open source database ( Jacob: software ) that is a NoSQL database.
    - web based api?
  - Ashley: It's document based.
  - Jacob: Not all NoSQL databases are document based, but MongoDB is.
    - we've chosen because it's all JSON under the hood.
  - Marlene: Local vs Remote
    - Jacob: Atlas will be easier to get to proof of life, all the features and network infrastructure is out of our control. But there's no maintenence. If we want more controll of our data and the software that interfaces with that data, a local mongo server is gonna be beneficial.
- What is the difference between SQL and NoSQL?
  - Paul: SQL is relation based, that uses foreign keys (Jacob: also primary) to tie table together,
    - NoSQL is not associated in the same way, but can be similar.
    - Jacob: NoSQL can use these same concepts to relate data, the software itself is lacking the safegaards that true relational databases use.
  - Lesley: SQL scales pretty vertically.
    - Jacob: NoSQL is pretty scalable both ways.
  - Dave: NoSQL databases are really powerful because add more servers.
- What is Mongoose?
  - Garhett: It's middleware?  It's middleware because it sits in between our javascript and the data we want to save.
    - Jacob: I dont' consider this middleware, because the output leaves our system, and converses with a new one (Mongo).
    - An ORM: Object relational mapping - we're taking javascript type data and 'mapping' it to mongo type data.
  - Jacob: Javascript library, third node_module.

### Lab 3

- High Level UML
- defining class

```js

// index.js

const note = require('./note.js');

const newNotes = new Note('Jacob');

// note.js

function Note(name) {
  this.name = name;
}

class Note {
  constructor(name) {
    this.name = name
  }
 
  print() {}
}
```

- See review folder for lab review code!  Thanks Dave :)

## Mongoose Middleware
- what is Middleware?
  - Any code that sits between our input and our output within our code base.
  - in this project, mongoose is generally the endgoal.
  - Mongose gives us an interface to run js business logic, based on 'events' that mongoose experiences.
    - find
      - we need to add a system based id?
      - Do we want to capitalize first and lastname before we respond to our User?
    - save
    - findOneAndDelete
  - Mongoose calls this feature: hooks
      - 2 types: pre and post

- See typed-demo folder

## Scaling our ORM
- Incapsulting Mongoose logic into our classes.

```js

class Notes /* extends DBInterface */ {
  add() {
    this.schema.save()
    mongooseModel.save()
  }

  list() {
    mongooseModel.find()
  }

  delete() {
    mongooseModel.delete()
  }
}

// abstract mongoose stuff to its own special class

class DBInterface {
  constructor(schema) {
    this.schema = schema
  }

  get()

  create()

  update()

  deletes()
}
```

## Testing with Supergoose
- Issues with testing modules that go out and talk to a db / server => thses things are a whole other machine / program that needs to be running.
- cf-supergoose: which handle mongoose.connect without using our actual MONGODB_URI