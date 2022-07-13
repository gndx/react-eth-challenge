import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';
import data from '../../../api/data.json'
import * as AppContext from '../../context/AppContext';

describe('<Academic />', () => {
  jest
  .spyOn(AppContext, 'useAppContext')
  .mockImplementation(()=> data.data)

  const academic = shallow(<Academic />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 1 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(0);
  });

});
