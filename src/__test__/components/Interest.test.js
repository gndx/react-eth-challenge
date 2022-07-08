import React from 'react';
import { shallow } from 'enzyme';
import Interest from '../../components/Interest/Interest';
import data from '../data/interest';

describe('<Interest />', () => {
  const interest = shallow(<Interest data={data} />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.Interest-title').length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });

});
