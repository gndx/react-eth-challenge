import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';

const mockData = {
  "name": "Melissa Walsh",
  "profession": "FrontEnd Developer",
  "address": "Bogotá, Colombia.",
  "email": "melissa@example.com",
  "website": "https://example.com",
  "phone": "3042034240",
  "avatar": "https://arepa.s3.amazonaws.com/melissa.jpg",
  "social": [
      {
        "name": "facebook",
        "url": "https://facebook.com/"
      },
      {
        "name": "twitter",
        "url": "https://twitter.com/"
      },
      {
        "name": "github",
        "url": "https://github.com/"
      },
      {
        "name": "linkedin",
        "url": "https://www.linkedin.com/"
      }
    ]
}

describe('<About />', () => {
  const about = shallow(<About data={mockData}/>);

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
