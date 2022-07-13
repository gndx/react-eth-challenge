import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../components/Skills';
import data from '../../../api/data.json'
import * as AppContext from '../../context/AppContext';

describe('<Skills />', () => {
  jest
  .spyOn(AppContext, 'useAppContext')
  .mockImplementation(()=> data.data)

  const skills = shallow(<Skills />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
  });

});
