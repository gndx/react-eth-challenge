import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {

  const academic = shallow(<Academic />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

});
