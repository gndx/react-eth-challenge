import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../components/Profile';

describe('<Profile />', () => {
  const profile = shallow(<Profile />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile title', () => {
    expect(profile.find('.Profile-title').length).toEqual(1);
  });

  test('Profile has at least 2 items', () => {
    expect(profile.find('.Profile-desc').length).toEqual(1);
  });

});
