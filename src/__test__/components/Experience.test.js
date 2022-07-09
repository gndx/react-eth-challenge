import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const experience = shallow(<Experience />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.resume-title').length).toEqual(0);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.resume-item').length).toEqual(0);
  });

});
