import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../components/Profile';
import Title from '../../components/Title';
import Image from 'react-bootstrap/Image';

describe('<Profile />', () => {
  const profile = shallow(<Profile />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile title', () => {
    expect(profile.find('.title').length).toEqual(1);
  });

  test('Profile Images', () => {
    expect(profile.find(Image).length).toEqual(4);
  });

  test('Profile has a change language button', () => {
    expect(profile.find('.change-language-btn').length).toEqual(1);
  });
});
