import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

import json from '../../../data.json'

describe('<Header />', () => {
  const header = shallow(<Header avatar={json.data.avatar}/>);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header photo', () => {
    expect(header.find('.Header-photo').length).toEqual(1);
  });

});
