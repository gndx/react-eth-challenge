import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import { data } from '../../../data.json';

describe('<Header />', () => {
  const headerData = {
    address: data.address,
    avatar: data.avatar,
    email: data.email,
    name: data.name,
    phone: data.phone,
    professional: data.profession,
    website: data.website,
  };

  const header = shallow(<Header data={headerData} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });
});
