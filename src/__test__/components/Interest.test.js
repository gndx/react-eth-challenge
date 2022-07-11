import React from 'react';
import { shallow } from 'enzyme';
import Interest from '../../components/Interest';

const fakeData = ['javascript', 'develop', 'backend', 'frontend'];

describe('<Interest />', () => {
  const interest = shallow(<Interest interests={fakeData} />);

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
