# Class 37

## Code Review

- See review folder

## Redux Practice

- Create a react application that can interface with a redux store ( using provided redux files )
  - You don't have to add any redux files, these are provided.
  - Create a form that can set values in using the provided actions.
    - We must be able to see react store within any connected component.
    - We need at least one componenet that can use each action.
    - I want you to use material UI ( rendering form data / displaying text ... )

## Combining Multiple Reducers

- Making sure our state is as atomic as possible!
  - Data modeling / function creating => keeping things as simple and only using what sabsolutely neccesary.
  - We want our reducers to manage the same thing ( an atomic state );

```js

// Lets look at the demo from yesterday

let initialState = {}


export default const reducer = (state = initialState, action) => {

  ...
  case 'INCREMENT':
    // state.candidats.map(candidate => candidate.name === action.payload ? candidata.votes += 1)

    return { ...state, action.payload}

  ..

}
```
