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

    viewButton.simulate('click');

    let displayElement = app.find('#word');
    expect(displayElement.text().includes('current words')).toBe(true);
  });
});

```

### Handling default form behavior in tests

- Testing the similar code, but Ashley is running into a preventDefault() Error.
  - Mocking browser behaviour?

## Deployment

## State and Props

## Composing Complex Components
- Single responsibilty of UI components.
  - Creating contract.
