import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';
import Title from '../../components/Title';

describe('<About />', () => {
  const about = shallow(<About t={(key) => key} />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find(Title).length).toEqual(1);
  });

  test('About has p description', () => {
    expect(about.find('p').length).toEqual(1);
  });
});
