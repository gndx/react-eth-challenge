import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import db from '../../../data.json';

describe('<Header />', () => {
  const header = shallow(<Header data={db.data} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
