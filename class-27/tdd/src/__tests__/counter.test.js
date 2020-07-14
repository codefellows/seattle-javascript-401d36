import React from 'react';
// shallow lets us look at just the JSX that is returns, mount allows us to check state / prop stuff
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Counter from '../components/counter.js';


// counter should maintain a state property called count, which gets increments on button click
// counter should display the count to the user

describe('Counter tests', () => {
  it('should render at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('p').exists()).toBe(true);
    expect(app.find('button').exists()).toBe(true);
  });

  it('should update state on click', () => {
    let app = mount(<Counter />);
    let increment = app.find('#increment');
    expect(increment.exists()).toBeTruthy();
    expect(app.state('count')).toBe(0);
    increment.simulate('click');
    expect(app.state('count')).toBe(1);
  });

  it('renders correctly', () => {
    const DOM = renderer.create(<Counter />).toJSON();
    expect(DOM).toMatchSnapshot();
  });
});