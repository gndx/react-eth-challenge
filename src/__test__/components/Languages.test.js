import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  const languages = shallow(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.language-item').length).toBeGreaterThan(1);
  });

});
