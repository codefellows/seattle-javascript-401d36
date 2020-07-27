# Class 36

## React Review

- What is a component?
  - Ashley: A chunk of something that work together to serve a purpose, can work components but not necessary. Returning JSX.
- What is Component state?
  - Dave: the data that the component uses, it can change by passing something into it.
- What are Component props?
  - Paul: property that is passed from parent down to the child.
- What is a hook?
  - Something that hooks into something else? Takes data from a component and passes it back?
  - Jacob: a hooks is a function that uses one or more pieces of the React API.
    - What is the React Api: ( useState, useEffect, useCallback, useMemo );
    - Why is this important?
      - If we don't use any part of React, React won't know when to update.
        - React needs to know when to update it's component and restart the component lifecycle.
    - There is a design patern that React wants you to use?
- What is the React Component LifeCycle?
  - The set of events that a component goes through on the way to being rendered.
  - componentWillMount()
  - componentDidMount()
  - componentWillUpdate()
  - For hooks: useEffect - this hooks plugs us into the react component lifeCycle.
- What is the Context React API?
  - Setting global state that persists from parent through it's children ( opt-in ).
  - We can use it to store data that multiple children might need.
  - Parent ( provider ) => children into the provider.

```js
// useFetch.js
import { useState } from 'react';

function useFetch(url) {
  const [ users, setUsers ] = useState;  

  const data = {name: 'Jacob'};

  return [ data ];
}
```

```js
// auth-context.js

import React from 'react';

const AuthContext = React.CreateContext();

export AuthContext;

const Provider = () => {
  return (
    <AuthContext.Provider>
      {props.children}
    </AuthContext.Provider>
  )
}

export default Provider;


// context child component

import { AuthContext } from '../user-context.js'

```

- Hooks
  - useState with context.
- Cookies: Small file that sits on in your computer files that contains a very small amount of data.
  - attaching a small object to a request.
  - Are both server and browser side.
  - No localStorage on a server, tpycially cookes are used server side for any session data.
  - Main use case: tokens
    - Shopping cart items
    - favorited things on a site ( previously ).

## Material UI

- Library of components, material design priciples.
  - Material Design: design priciples as outlines by google.
    - Styling specificstions for differnet UI elelement use cases.
    - This provides a very cohesive, and people think that this look and feel gives users a happy feeling.

## Redux

- Truly Global State
- Before redux we used context to handle the same considerations ( not needing to pass props for shared component state ).
- Redux really allows state to be managed global, and not a chunk of data.

### Difference between context and Redux

- Context jsut gives you a big blob of data that any component (who opts-in) can read and manipulate
- Redux gives you access to smaller chunks of data (which are part of a larger global state), our job is plug our functionality into reduxes idea of state.