import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {
  const header = shallow(<Header />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header menu', () => {
    expect(header.find('.profile-menu').length).toEqual(1);
  });

  test('Header img container', () => {
    expect(header.find('.img-container').length).toEqual(1);
  });
});
