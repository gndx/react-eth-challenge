import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  const data = {
    languages: [
      {
        name: 'Spanish',
        percentage: '100%',
      },
      {
        name: 'English',
        percentage: '50%',
      },
      {
        name: 'French',
        percentage: '25%',
      },
    ],
  };
  const languages = shallow(<Languages {...data} />);

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
