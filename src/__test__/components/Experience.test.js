import React from 'react';
import { shallow } from 'enzyme';
import {Experience} from '../../components/Experience';
import { apiData } from '../../__mocks__/data';

describe('<Experience />', () => {
  const experienceData = apiData.data.experience
  const experience = shallow(<Experience data={experienceData}/>);

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
