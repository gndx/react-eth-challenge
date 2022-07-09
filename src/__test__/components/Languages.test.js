import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';
import object from '../../../mock/object.json';

describe('<Languages />', () => {
  const languages = shallow(<Languages languages={object.languages} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    console.log('fdsfsds', languages.find('.Languages-item').length);
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });

});
