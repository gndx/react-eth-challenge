import React from 'react';
import { shallow } from 'enzyme';
import data from 'api/data.json';
import Languages from '../../components/Languages';
import * as AppContext from '../../context/AppContext';

describe('<Languages />', () => {
  jest
    .spyOn(AppContext, 'useAppContext')
    .mockImplementation(() => data.data);

  const languages = shallow(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });

});
