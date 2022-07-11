import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  const header = shallow(<Header />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
