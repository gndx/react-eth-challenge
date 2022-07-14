import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/Experience';
import data from '../../../data.json';
import * as AppContext from '../../containers/AppContext';

describe('<Experience />', () => {
  jest.spyOn(AppContext, 'appContext').mockImplementation(() => data.data);
  const experience = shallow(<Experience />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(2);
  });

});
