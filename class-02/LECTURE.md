# Class 02 TDD and Code Quality

## Warm up
- Node Program that can run mathematical operations using a command line.
- Behavior: `node index.js multiply 1 2` => `2`
- At least on module. I want us to require something in our index.js
- Should also contain a `package.json` file.

### What was confusing?
  - Getting operators to behave like operators (+, -, *, /);
  - Getting input from the user?
  - Using the module(s) that we've made.

Dealing with input: process.argv
  - index 0: path to Node installation
  - index 1: path to our file to run inside of node
  - index 2 - beyond: string that the user typed into the command line

- sideNote: falsey: {0,'', [], false, undefined, null} if ('') => false
  - truthy: {'strinng', [1,2,3], true, {}} => true

## Lab Review
- What things are confusing?
- See operator-cli for reference

## Functional Programming
- what is functional programming
  - a function that behaves like a mathematical equation
  - 1 + 2 = 3
    - The function here is +
    - 1 and 2 are the parameters.
    - add(1, 2) => 3
    - a function can potentially mutate is arguments
    - add(number) 
      - number.push(3);
  - returning values, no side-effects
  - add(1, 2)
    - within add function definition => divide(1,2) // don't do this
    - console.log(1, 2) => still no. unless it's job is to console.log.
  - do not reference a global variables.
  - Functions have one job, do the job and return a value.
- Why do we care?
  - clean, scalable, maintainable, contemporary.
- Examples:
```js
 //index.js
const number = 1 // don't reference number within print (global)

const print = require('path-to-print');

print(number); // insead pass it in

function pureAdd(a, b) {
  return a + b;
}

function impureAdd(a, b) {
  console.log(a + b);
  return a + b;
}

const result = pureAdd(1, 2);
print(result);

function mutateArray(arr) {
  for (let i = 0; i < arr.length; i ++) {
    arr[i] = arr[i] * arr[i];
  }

  return arr;
}

function nonMutateArray([...arr]) { // arrays are passed by reference not by value;
  // let numbers = arr; // ... equals "spread" this takes an iterable, and puts it contents into a new data structure.
  for (let i = 0; i < arr.length; i ++) {
    arr[i] = arr[i] * arr[i];
  }

  return arr;
}

// we can use functions as values to both return and modify
function curriedFunction(person, potatoe) { // curried functions are just functions that return other functions
  return function(greeting) {
    potatoe(greeting + person); // TypeError: Potator is not a function
  }
}
```

## ES6 Class syntax
- Syntactic sugar for constructors

```js

// old way of creating a constructor
function ObjConstruct(property) {
  this.property = property
}

ObjConstruct.prototype.method = () {
  consle.log(this.property);
}

const newThing = new ObjContruct('string');
newThing.method();

// newer way of creating objects
class ObjClass {

  constructor(property) {
    this.property = property;
  }

  method(string) {
    console.log(this.property + string);
  }
}

const banana = new ObjClass('string');

// we do this so that we can encapsulate this in all the goodness that makes up an ObjClass
banana.method('some string');


function print() {

  const potatoe = new ObjClass('STRING');
  //potatoe ==== "this" inside of the class
  patatoe.property;
  console.log(this);
}

```

## Testing with Jest and Using Mocks
- Mocking of Node Modules
- Mocking is the faking of dependency, to only test the software we've written.
- when we run this program normally: `node index.js -u localhost -m get`
- when we test we only run: `jest --verbose -coverage`
- jest.mock('minimist'): specify some implementation that will 'fake' the libraries use case
- jest.spyOn(global.console, 'log'): specifies an object with a method that we want some information about.
- jest uses 3 functions to run tests: describe(), it(), expect()
  - describe groups tests
  - it runs a single test
  - expect makes an assertiong about some data.

```js
// input.test.js

// this modules uses process.argv and minimist
jest.mock('minimist');

const minimist = require('minimist');
minimist.mockImplementation(() => {
  return {
    {u: 'http://localhost:3000' m: 'GET' }
  }
});
const Input = require('./lib/input');


// how can we get valid dependecies inside of a test

describe('Testing input module', () => {
  it ('should have some input properties', () => {

    const options = new Input();



  });
});


```
