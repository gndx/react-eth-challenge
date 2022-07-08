import React from 'react';
import { shallow } from 'enzyme';
import { Experience, ExperienceItem } from '../../components/Experience';

describe('<Experience />', () => {
  const experience = shallow(<Experience />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.dive('.Experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find(ExperienceItem).length).toBeGreaterThan(2);
  });
});
