import React from 'react';
import { shallow } from 'enzyme';
import { Languages } from '../../components/Languages';
import { PercentageBar } from '../../components/PercentageBar';
describe('<Languages />', () => {
  const languages = shallow(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.dive('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find(PercentageBar).length).toBeGreaterThan(2);
  });
});
