import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';

const data = [{degree: 1, description: "hola"},{degree: 2, description: "hola"}, {degree: 3, description: "hola"}]
describe('<Academic />', () => {
  const academic = shallow(<Academic academic={data} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
  });

});
