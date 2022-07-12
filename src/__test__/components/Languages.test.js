import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';

import json from '../../../data.json'

describe('<Languages />', () => {
  const languages = shallow(<Languages items={json.data.languages}/>);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 1 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(1);
  });

});
