import React from 'react';
import { shallow } from 'enzyme';
import Interest from '../../components/Interest';

describe('<Interest />', () => {

  const interest = shallow(<Interest />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.Interest-title').length).toEqual(1);
  });

});
