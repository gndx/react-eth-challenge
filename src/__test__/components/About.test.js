import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../components/About';
import { user } from '../mocks/data';

describe('<About />', () => {
  const about = shallow(<About descriptionList={user.descriptionList} />);

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
