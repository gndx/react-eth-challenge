import React from 'react';
import { shallow } from 'enzyme';
import SocialNetwork from '../../components/SocialNetwork';

describe('<SocialNetwork />', () => {
  const socialNetwork = shallow(<SocialNetwork />);

  test('SocialNetwork render', () => {
    expect(socialNetwork.length).toEqual(1);
  });

  test('SocialNetwork title', () => {
    expect(socialNetwork.find('.SocialNetwork-title').length).toEqual(1);
  });

  test('SocialNetwork has 3 items', () => {
    expect(socialNetwork.find('.SocialNetwork-item').length).toBeGreaterThan(2);
  });
});
