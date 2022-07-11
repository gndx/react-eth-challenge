import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const userData = {
    experience: [{
      jobTitle: '', jobDescription: '', company: '', startDate: '', endDate: ''
    }, {
      jobTitle: '', jobDescription: '', company: '', startDate: '', endDate: ''
    }, {
      jobTitle: '', jobDescription: '', company: '', startDate: '', endDate: ''
    }]
  };
  const experience = shallow(<Experience userData={userData} />);

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
