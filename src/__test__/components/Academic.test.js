import React from 'react';
import { shallow } from 'enzyme';
import { Academic } from '../../components/Academic';
import { user } from '../mocks/data';

describe('<Academic />', () => {
  const academic = shallow(<Academic academic={user.academic} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
  });
});
