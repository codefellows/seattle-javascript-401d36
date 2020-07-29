# Class 38

## Warm Up

- Split into two teams, building Redux store for messages
  - Store must store object that look like this:
    - { text, createdAt, author } - all of these are strings.
  - One team (Paul, Dave, Ashley), is going to create a all the components needed to talk to a redux store.
    - Provider
    - "Connected" component
  - Another team (David, Marlene, and maybe Garhett), will create the store, reducer, and some actions
    - Initial state
    - Reducer
    - Actions
      - send (add messages to the store)
      - fetch (gets alll messages from the store)

## Async Actions in Redux

- How are actions used within redux now:
  - Reducer defines state
  - Actions are passed into reducer to inform how state should change.
    - This requires our actions to return objects
    - What happens if an operations needs to run and complete, before that object is returned

```js

const sendMessage =(/*no data from component directly*/) => {

  // fetch messages from a server?
  // fetch() ???

  // we need to update our store with some middleware
    /// hey redux, wait until an object is returned before you attempt to update the state.

  return {
    type, paylaod,
  }
}

```
- In order to fix with actions that behave with any difference, So we modify the events in redux with middleware
- Redux middleware
  - Some code that runs between an action getting dispatched, and the reducer receiving the action object.
- Redux Thunk
  - This is our middleware for letting redux know what to do when an async action occurs ( it's available on npm ).

## Testing our actions and reducers
- Testing the reducer is super easy.
- Testing async actions is now important.