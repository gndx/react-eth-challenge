import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/Experience';

const mockData = {
  "experience": [
      {
        "company": "PugStar",
        "endDate": "Present",
        "jobDescription": "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
        "jobTitle": "Frontend",
        "startDate": "Jan 2020"
      },
      {
        "company": "CatStore",
        "endDate": "Jan 2016",
        "jobDescription": "Meow in empty rooms lick left leg for ninety minutes, still dirty.",
        "jobTitle": "Backend",
        "startDate": "Sept 2019"
      },
      {
        "company": "SpaceX",
        "endDate": "Jan 2016",
        "jobDescription": "Meow in empty rooms lick left leg for ninety minutes, still dirty.",
        "jobTitle": "Backend",
        "startDate": "Sept 2019"
      }
    ]
}

describe('<Experience />', () => {
  const experience = shallow(<Experience data={mockData}/>);

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
