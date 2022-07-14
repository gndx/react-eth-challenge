import React from 'react';
import { shallow } from 'enzyme';
import Interest from '../../components/Interest';
import data from '../../../data.json';
import * as AppContext from '../../containers/AppContext';

describe('<Interest />', () => {
  jest.spyOn(AppContext, 'appContext').mockImplementation(() => data.data);

  const interest = shallow(<Interest />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.Interest-title').length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });

});
