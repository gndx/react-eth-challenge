import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';

describe('<About />', () => {
  const data = {
    social: [
      {
        name: 'facebook',
        url: 'https://facebook.com/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/',
      },
      {
        name: 'github',
        url: 'https://github.com/',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/',
      },
    ],
  };
  const about = shallow(<About {...data} />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.About-title').length).toEqual(1);
  });

  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });
});
