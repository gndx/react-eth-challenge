import React from 'react';
import { shallow } from 'enzyme';
import {Languages} from '../../components/Languages';
import { apiData } from '../../__mocks__/data';

describe('<Languages />', () => {
  const languageData = apiData.data.languages
  const languages = shallow(<Languages data={languageData}/>);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });

});
