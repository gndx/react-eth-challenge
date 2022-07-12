import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import datajson from '../../../data.json';


describe('<Header />', () => {
  const header = shallow(<Header data={
    datajson.data.address+
    datajson.data.email+
    datajson.data.name+
    datajson.data.phone+
    datajson.data.profession
    }/>);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });
});
