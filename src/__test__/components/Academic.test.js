import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';
import json from '../../../data.json';

describe('<Academic />', () => {
  const academic = shallow(<Academic academics={json.data.academic}/>);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 2 items', () => {
    expect(academic.find('.Academic-item').length).toEqual(2);
  });

});
