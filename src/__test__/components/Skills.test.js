import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../components/Skills';

describe('<Skills />', () => {
  const data = {
    skills: [
      {
        name: 'JavaScript',
        percentage: '90%',
      },
      {
        name: 'React',
        percentage: '90%',
      },
      {
        name: 'Angular',
        percentage: '90%',
      },
    ],
  };
  const skills = shallow(<Skills {...data} />);

  test('Skills render', () => {
    console.log(skills.length);
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
  });
});
