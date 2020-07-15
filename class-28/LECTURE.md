# Class 28

## TDD Warm Up

- Let's pretend we all work for an org, that needs to plan and build a react component:
  - Specs:
    - Total of 4 buttons
    - 3 buttons need to update component state, with a unique word.
      - component state that manages 1 property: currentWord.
    - 1 button that updates our view with the current word property.


```jsx

/// dont forget to include setupTests.js

import React from 'react';

// shallow just renders the 1 component that your pass as a parameter

  // shallow(<Words >) => gives us the output html from the one component

// mount renders all children and process contructor values

  // mount(<Words />) => sees what children are doing, we also can look at .state() .props() two methods that return state and props properties.

import { shallow, mount } from 'enzyme';

import Words from '../components/words.js';

describe('testing Words', () => {
  it('update state with the currentWord that is clicked', () => {
    let app = mount(<Words />);
    let stateButton = app.find('#test');
    stateButton.simulate('click');

    expect(app.state('currentWord')).toBe('test');
  });

  it('displays proper state value', () => {
    let app = mount(<Words />);
    let viewButton = app.find('#view');
    let displayElement = app.find('#word');

    expect(displayElement.text()).toBe('');
    viewButton.simulate('click');

    // expect(displayElement.text().includes('current words')).toBe(true);
    expect(displayElement.text()).toEqual('current words');
  });
});

```

### Handling default form behavior in tests

- Testing the similar code, but Ashley is running into a preventDefault() Error.
  - Mocking browser behaviour?

## Deployment

- How does our gh-pages now when to build / what to deploy
  - Our package.json specifies a order of operations
    - build
    - gh-pages uses build files to create a deployment branch
  - We tell gh-pages to do this on every push.  Is this good?

## State and Props

- State represents important properties of a single component.
- Props represent the relation between a components state, and it's children.
  - The relationship is really defined by React 1-way data-flow.
    - Data only flows from parents to children
    - Mimic the flow of data from a tree.
    - This is because the DOM in an HTML document is also a tree.
    - Angular has a 2 way data flow, so it needs to prescribe getters and setters, as a libary
    - React want to be flexible and give us developers more control, thus it adhears to and easier to manage system.

## Composing Complex Components
- Single responsibilty of UI components.
  - Creating contracts.
