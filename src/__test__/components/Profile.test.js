import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../components/Profile';
import datajson from '../../../data.json';

describe('<Profile />', () => {
  const profile = shallow(<Profile data={datajson.data.Profile} />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile title', () => {
    expect(profile.find('.Profile-title').length).toEqual(1);
  });

  test('Profile have a description', () => {
    expect(profile.find('.Profile-desc').length).toEqual(1);
  });

});
