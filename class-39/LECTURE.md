# Class 38

## Review Async Action / Redux so far

- Any Labs that folks want reviewed.
  - Thanks for the code Dave!

## New Things in JS

- When do I switch to hot new things?
- What issues does it solve?
  - We don't really want to swtich just for the sake of using new things.
  - If there is an actionable benefit that could save time / do things more effciently than we should!

## Redux Toolkit

- There are some siginificant pain points with vanilla redux:
  - reducers and action are just functions, and we need to manage and test those.
  - More descriptive API.
- Descriptive encapsulation of redux is meant to 
- We want to tell redux everything, and we don't want any ambiguity of what are functions are actually doing
- hot new things usually try and offer immediate quality of life improvements.

```js

const reducer = (state, action) => {

  // this is all on us
  switch(action.type) {
    case 'ADD':
  }
}


import ReducerCreator from 'redux'

ReducerCreate({
  add: () => {}
});

```

## Topics for next week

- Typescript / Babel / Webpack
- React native / Flutter
- Iconic / Electron JS