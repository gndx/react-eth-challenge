import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';
import data from '../../../api/data.json'
import * as AppContext from '../../context/AppContext';

describe('<About />', () => {
  jest
    .spyOn(AppContext, 'useAppContext')
    .mockImplementation(()=> data.data)

  const about = shallow(<About />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.About-title').length).toEqual(1);
  });

  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });

});
