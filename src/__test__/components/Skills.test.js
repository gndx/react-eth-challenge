import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../components/Skills';

import { data } from '../../../data.json';

describe('<Skills />', () => {
  const wrapper = shallow(<Skills skills={data.skills} />);

  test('Skills render', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(wrapper.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(wrapper.find('.Skills-item').length).toBe(2);
  });
});
