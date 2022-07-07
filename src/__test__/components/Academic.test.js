import React from 'react';
// import { mount } from 'enzyme';
import {render, screen} from '@testing-library/react'
import Academic from '../../components/Academic';

describe('<Academic />', () => {
  // const academic = mount(<Academic />);
  render(<Academic />);

  test('Academic render', () => {
    // expect(academic.length).toEqual(1);
    expect(screen.length).toEqual(1);
  });

  test('Academic title', () => {
    // expect(academic.find('.Academic-title').length).toEqual(1);
    expect(screen.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    // expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
    expect(screen.find('.Academic-item').length).toBeGreaterThan(2);
  });

});
