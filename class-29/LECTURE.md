# Class 29: View Routing

## Warm Up

- We're building 2 components
  - Let's create a messaging app!
  - Input 
    - make a post request, to a url that comes from props.
    - send application/json body
      - { createdAt : date string, author : char string , text : char string }
    - passes the response data into a handle that comes from props.
  - messageList
    - take in a array of messages from props:
      - [ { createdAt: date string, author : char string, text: char string },  ... ]
    - display all the messages in a pleasing way.
      - they must all be present in our component.

## Code Review

- Paul: Response header in our RESTy application
- Garhett: Can I pass things into the children of other component children.
  - Yes
  - We'll build pass some data like so:

```java

 App
  -- props --> child
      -- props --> 2ndChild

```

- Marlene: Accessing props in header, using star wars API
  - Some API return different results!!
  - This is a place for exploration!!
    - Sounds like a great place for a custom response handling component!
      - Using a validation utility function

## Componenent Composition Continued
- conditionally rendering JSX
  - Conditional logic is often best implemented in a "utility" component
    - IF => condition prop, that if evulated as truthy the children of the component will render
    - MODAL => use IF components to condtional hide and show based a state variable.
    - LIST => Uses both to render items in a list.
    - These components that are meant to be used anywhere in our app, for utilty.

```jsx

// component that uses a prop to conditional render its children

import React from 'react';

// return something if a condition is true
const render (condition = false, children = null) => {
  return condition ? children : null
  // if (condition) {
  //   return children
  // } else {
  //   return null;
  // }
}

// props.children is all he child element with the openning and closing angle brackets
/*
<Component>
  <Child />
  <Child />
</Component>
*/
const If = (props) => render(props.condition, props.children);

export default If
```

## View Routing

- We have a single page app, that we want swap the entire view.
  - signup -> dashboard
  - Maybe we can build a bunch switch statements
    - This is basically how view routing works.
    - uses our window.location (the URL bar) to render different views.