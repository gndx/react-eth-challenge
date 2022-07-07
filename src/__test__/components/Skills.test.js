import React from 'react';
// import { mount } from 'enzyme';
import {render, screen} from '@testing-library/react'
import Skills from '../../components/Skills';

describe('<Skills />', () => {
  // const skills = mount(<Skills />);
  render(<Skills />);

  test('Skills render', () => {
    // expect(skills.length).toEqual(1);
    expect(screen.length).toEqual(1);
  });

  test('Skills title', () => {
    // expect(skills.find('.Skills-title').length).toEqual(1);
    expect(screen.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    // expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
    expect(screen.find('.Skills-item').length).toBeGreaterThan(2);
  });

});
