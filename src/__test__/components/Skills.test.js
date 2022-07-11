import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../components/Skills';

const fakeData = [
  {
    name: 'HTML5',
    percentage: '75%',
  },
  {
    name: 'CSS',
    percentage: '25%',
  },
  {
    name: 'JavaScript',
    percentage: '55%',
  },
  {
    name: 'React',
    percentage: '90%',
  },
];

describe('<Skills />', () => {
  const skills = shallow(<Skills skills={fakeData} />);

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
