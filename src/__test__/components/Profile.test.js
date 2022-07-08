import React from 'react';
// import { mount } from 'enzyme';
import {render} from '@testing-library/react'
import Profile from '../../components/Profile';

describe('<Profile />', () => {
  // const profile = mount(<Profile />);
  const {container} = render(<Profile />);
  let containerFirstChild = container.firstChild;

  test('Profile render', () => {
    // expect(profile.length).toEqual(1);
    expect(container.childElementCount).toEqual(1);
  });

  test('Profile title', () => {
    // expect(profile.find('.Profile-title').length).toEqual(1);
    expect(containerFirstChild.getElementsByClassName('Profile-title').length).toEqual(1);
  });

  test('Profile have a description', () => {
    // expect(profile.find('.Profile-desc').length).toEqual(1);
    expect(containerFirstChild.getElementsByClassName('Profile-desc').length).toEqual(1);
  });

});
