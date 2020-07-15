import React from 'react';
import { shallow, mount } from 'enzyme';

import Words from '../components/group2.js';

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

    // expect(displayElement.text()).toBe('');
    viewButton.simulate('click');

    // expect(displayElement.text().includes('current words')).toBe(true);
    expect(displayElement.text()).toEqual('current words');
  });
});