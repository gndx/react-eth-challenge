import React from 'react';
import { shallow } from 'enzyme';
import { Academic, AcademicItem } from '../../components/Academic';

describe('<Academic />', () => {
  const academic = shallow(<Academic />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.dive('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find(AcademicItem).length).toBeGreaterThan(2);
  });
});
