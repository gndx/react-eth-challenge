import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';
import data from '../../../data.json';
import * as AppContext from '../../containers/AppContext';

describe('<Academic />', () => {
  jest.spyOn(AppContext, 'appContext').mockImplementation(() => data.data);
  const academic = shallow(<Academic />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
  });
});
