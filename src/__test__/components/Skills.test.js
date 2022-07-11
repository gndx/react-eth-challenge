import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../components/Skills';
import { skillsTest } from '../../utils/testData';

describe('<Skills />', () => {
  const skills = shallow(<Skills skills={skillsTest.skills} />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
  });

});
