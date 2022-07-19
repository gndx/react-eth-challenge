import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  const testArray = [
    {
      "name": "Spanish",
      "percentage": "90%"
    },
    {
      "name": "English",
      "percentage": "70%"
    },
    {
      "name": "French",
      "percentage": "20%"
    }
  ]

  const languages = shallow(<Languages languages={testArray} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });

});
