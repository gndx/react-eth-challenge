import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';
import data from '../data/about';

describe('<Header />', () => {
  const header = shallow(<Header data={data} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
