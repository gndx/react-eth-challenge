import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../components/Skills';

const data = [{0: {name: "hola"}},{1: {name: "hola"}}, {3: {name: "hola"}}]
describe('<Skills />', () => {
  const skills = shallow(<Skills skills={data}/>);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
  });

});
