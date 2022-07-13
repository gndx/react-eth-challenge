import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';
import DataStub from '../../__stubs__/full_cv.json';

describe('<Academic />', () => {
  const academicData = DataStub.data.academic;
  const academic = shallow(
    <Academic data={academicData} />,
  );

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
