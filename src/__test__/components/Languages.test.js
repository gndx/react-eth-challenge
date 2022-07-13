import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';

const data = [{0: {name: "hola", percentage: "90%"}},{1: {name: "hola", percentage: "90%"}}, {3: {name: "hola", percentage: "90%"}}]

describe('<Languages />', () => {
  const languages = shallow(<Languages languages={data} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(1);
  });

});
