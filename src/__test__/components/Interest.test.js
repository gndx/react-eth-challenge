import React from 'react';
import { shallow } from 'enzyme';
import {Interest} from '../../components/Interest';
import { apiData } from '../../__mocks__/data';

describe('<Interest />', () => {
  const interestData = apiData.data.interest
  const interest = shallow(<Interest data={interestData}/>);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.Interest-title').length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });

});
