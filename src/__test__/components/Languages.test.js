import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';

const mockData = {
  "languages": [
      {
        "name": "Spanish",
        "percentage": "90%"
      },
      {
        "name": "English",
        "percentage": "50%"
      },
      {
        "name": "Japanese",
        "percentage": "2%"
      }
    ]
}

describe('<Languages />', () => {
  const languages = shallow(<Languages data={mockData}/>);

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
