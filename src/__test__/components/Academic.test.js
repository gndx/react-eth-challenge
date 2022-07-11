import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';

const fakeData = [
  {
    degree: 'Atomic Master',
    description:
      ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
    endDate: 'Jan 2017',
    institution: 'MIT',
    startDate: 'Jan 2018',
  },
  {
    degree: 'Space Engineering',
    description:
      'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
    endDate: 'Decenber 2015',
    institution: 'Harvard',
    startDate: 'Jan 2017',
  },
  {
    degree: 'Space Engineering',
    description:
      'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
    endDate: 'Decenber 2015',
    institution: 'Harvard',
    startDate: 'Jan 2017',
  },
];

describe('<Academic />', () => {
  const academic = shallow(<Academic academic={fakeData} />);

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
