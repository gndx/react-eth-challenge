import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../components/Profile';

describe('<Profile />', () => {
  const profile = shallow(<Profile />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile title', () => {
    expect(profile.find('.about__intro').length).toEqual(1);
  });

  test('Profile have a description', () => {
    expect(profile.find('.about__desc').length).toEqual(1);
  });

});
