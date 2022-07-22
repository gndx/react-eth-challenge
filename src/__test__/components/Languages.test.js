import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';
import DataStub from '../../__stubs__/full_cv.json';

describe('<Languages />', () => {
  const data = DataStub.data.languages;
  const languages = shallow(
    <Languages data={data} />,
  );

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
