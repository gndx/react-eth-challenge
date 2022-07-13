import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {
  const data = {
    name: 'Gabriel Rodriguez',
    profession: 'FrontEnd Developer',
    address: 'Guayaquil, Ecuador.',
    email: 'rodriguezpgabriel@gmail.com',
    website: 'https://rodriguezpgabriel.com',
    phone: '3042034240',
    avatar:
      'https://media-exp2.licdn.com/dms/image/C5603AQFN1jclSyl1kA/profile-displayphoto-shrink_800_800/0/1643046956026?e=1663200000&v=beta&t=LFGSkLUUxB7DTl5lZZDxpA7PlQxXLaXwGTHb8mHB1X8',
    Profile:
      'Soy un desarrollador front-end con experiencia en el desarrollo de aplicaciones web, móviles y de escritorio. Me especializo en Angular TypeScript / JavaScript y React',
  };
  const header = shallow(<Header {...data} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });
});
