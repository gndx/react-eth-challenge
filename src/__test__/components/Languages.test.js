import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages.js />', () => {
  const languages = shallow(<Languages />);

  test('Languages.js render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages.js title', () => {
    expect(languages.find('.Languages.js-title').length).toEqual(1);
  });

  test('Languages.js has 3 items', () => {
    expect(languages.find('.Languages.js-item').length).toBeGreaterThan(1);
  });

});
