import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const data = {
    experience: [
      {
        company: 'Technisys',
        endDate: 'Present',
        jobDescription: 'Frontend developer',
        jobTitle: 'Frontend Developer',
        startDate: '2021',
      },
      {
        company: 'Spoonity',
        endDate: '2021',
        jobDescription: 'Frontend developer',
        jobTitle: 'Frontend developer',
        startDate: '2020',
      },
      {
        company: 'Semgroup',
        endDate: '2021',
        jobDescription: 'Frontend developer',
        jobTitle: 'Frontend developer',
        startDate: '2019',
      },
    ],
  };
  const experience = shallow(<Experience {...data} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(2);
  });
});
