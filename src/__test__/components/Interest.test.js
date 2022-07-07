import React from 'react';
// import { mount } from 'enzyme';
import {render, screen} from '@testing-library/react'
import Interest from '../../components/Interest';

describe('<Interest />', () => {
  // const interest = mount(<Interest />);
  render(<Interest />);

  test('Interest render', () => {
    // expect(interest.length).toEqual(1);
    expect(screen.length).toEqual(1);
  });

  test('Interest title', () => {
    // expect(interest.find('.Interest-title').length).toEqual(1);
    expect(screen.find('.Interest-title').length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    // expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
    expect(screen.find('.Interest-item').length).toBeGreaterThan(2);
  });

});
