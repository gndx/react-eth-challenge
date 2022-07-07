import React from 'react';
// import { mount } from 'enzyme';
/**
 * render: lets us render the component as React would
 * screen: a utility for finding elements the same way the user does
 */
import {render, screen} from '@testing-library/react'
import About from '../../components/About';

describe('<About />', () => {
  // const about = mount(<About />);
  render(<About />);

  test('About render', () => {
    // expect(about.length).toEqual(1);
    expect(screen.length).toEqual(1);
  });

  test('About title', () => {
    // expect(about.find('.About-title').length).toEqual(1);
    expect(screen.find('.About-title').length).toEqual(1);
  });

  test('About haves 3 items', () => {
    // expect(about.find('.About-item').length).toBeGreaterThan(2);
    expect(screen.find('.About-item').length).toBeGreaterThan(2);
  });

});
