import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/Experience';
import dataCv from '../../../data.json'

describe('<Experience />', () => {
  const experience = shallow(<Experience {...dataCv.data} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(1);
  });

});
