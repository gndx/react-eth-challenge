import React from 'react';
// import { mount } from 'enzyme';
import {render, screen} from '@testing-library/react'
import Header from '../../components/Header';

describe('<Header />', () => {
  // const header = mount(<Header />);
  render(<Header />);

  test('Header render', () => {
    // expect(header.length).toEqual(1);
    expect(screen.length).toEqual(1);
  });

  test('Header title', () => {
    // expect(header.find('.Header-title').length).toEqual(1);
    expect(screen.find('.Header-title').length).toEqual(1);
  });

});
