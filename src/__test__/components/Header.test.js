import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import data from '../../../api/data.json'
import * as AppContext from '../../context/AppContext';

describe.only('<Header />', () => {
  jest
    .spyOn(AppContext, 'useAppContext')
    .mockImplementation(()=> data.data)

  const header = shallow(<Header />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
