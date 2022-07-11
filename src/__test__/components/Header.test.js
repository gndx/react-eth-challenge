import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import { data } from '../../__mocks__/styleMock';

describe('<Header />', () => {
  const header = shallow(<Header title={data.name} avatar={data.avatar}/>);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
