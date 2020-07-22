# Class 33

## Custom Hooks Review

- Paul: complex custom Hooks
- Marlene: useEffect hook, going over how to control

- Hook: What does it mean to hook it React features?
- Garhett: import a feature from react, and use it to do something.
- Why do we use these?
- Marlene: Saving time / consistency!
    - Jacob: these trigger React lifecycle events.
        - When we use these, React is aware that changes are being made, and it can update other components to make sure our data is consistent over the entire tree ( DOM, where all our elements live together ).
- Web Hook?
    - Ashley: something that performs something, in response to an some action.
    -Jacob: Hooks API is very similar, it triggers a response to some action that we specify.

## useAjax Hook

- see [review](./review/src/hooks/useJax.js)

## React Context API

- How to manage large application states.
- Managing large or seemingly disconneted segments of state.
    `import { useContext } from 'react'`
    - Paul: why not use this for all of our state.
        - Jacob: all of our component could make any sort of change to our app, which is
         un-validated, unprotected, not controlled for asynschrournous events. 
        - We realy only want to use this for small quality of life improvements.
- Moving away from component state, and thinking about a shared global app state, that any child component can "opt-in" to
- The big benefit, the parent no longer has to provide direct values to it's children
    - Children are simply alowed to opt in to a parents state.