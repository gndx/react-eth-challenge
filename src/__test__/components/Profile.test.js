import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../components/Profile';

const mockData = {
  "Profile": "Ignore the squirrels, you'll never catch them anyway hack, for floof tum, tickle bum, jellybean footies curly toes climb leg roll over and sun my belly, "
}

describe('<Profile />', () => {
  const profile = shallow(<Profile data={mockData}/>);

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
