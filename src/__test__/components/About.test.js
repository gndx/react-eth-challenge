import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';

const data = {
  social: [
    {name: 'example1', url: 'www'},
    {name: 'example2', url: 'www'},
    {name: 'example3', url: 'www'}
  ],
  name:'andrea', 
  phone: '634', 
  email: 'example@'
}
describe('<About />', () => {
  const about = shallow(<About {...data}/>);

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
