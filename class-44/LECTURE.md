# Class 44

## Review Typscript Concepts

- Defining variables in Typescript!

```ts

// defining function now needs a definition for parameters and for return values

function log(arg: string) : void {

}

interface initialState {
  name: string,
  list: any[],
}

```

```jsx

const initialState = {
  name: '',
  list: [],
}

this.state = {}

```

- What is a compiler / to compile code?
  - Takes our code and packages it together, to use elsewhere.
  - The typscript we create (while it looks a lot javascript), it has special syntax artifiacts and keywords that don't belong in js, and this will cause runtime errors.
    - The problem with these, is we only get 1 at a time.
    - Expereiced developer hate having to deal with 1 error a time.
- This is hear to capture all potential bugs before runtime, so we can have a much better runtime.
- Technically, it does not exectute the code, but creates a "manifest" that needs to vaildate function / varibles / data types.

- @types/third-party-library?
  - these are libaries of type definitions for a given javascript library.
  - Extra step in our development process.

## Day 2 of Typescript

- We are doing away with react-scripts!  and learning how to configure an compile our own react projects.
- A very very prevalent tool is webpack:

### Webpack

- Dependency bundler
  - it looks at some source code, and bundles all code together for runtime.
  - A Compiler for web stuff.
    - "Give me your code that unusable" ( either for advanced syntax, or modular organization struccure)
      - I can bundle that all togther so a browser can understand it.
- How do we weback
  - install the library, add a config file.
    - what are the exensions you using, and what do you want me to do with them?
      - loader: tells wepack what to do with a language type.

- to initialize: `npm install webpack webpack-cli ts-loader typescript webpack-dev-server react react-dom`

## React in Typscript
