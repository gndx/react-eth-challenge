import React from 'react';
// import { mount } from 'enzyme';
import {render, screen} from '@testing-library/react'
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  // const languages = mount(<Languages />);
  render(<Languages />);

  test('Languages render', () => {
    // expect(languages.length).toEqual(1);
    expect(screen.length).toEqual(1);
  });

  test('Languages title', () => {
    // expect(languages.find('.Languages-title').length).toEqual(1);
    expect(screen.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    // expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
    expect(screen.find('.Languages-item').length).toBeGreaterThan(2);
  });

});
