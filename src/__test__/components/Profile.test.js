import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../components/Profile';

describe('<Profile />', () => {
  const data = {
    Profile:
      'Soy un desarrollador front-end con experiencia en el desarrollo de aplicaciones web, móviles y de escritorio. Me especializo en Angular TypeScript / JavaScript y React',
  };
  const profile = shallow(<Profile {...data} />);

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
