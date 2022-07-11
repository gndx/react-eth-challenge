import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {

  const userData = {
    Academic: [{ degree: '', description: '', institution: '', startDate: '', endDate: '' },
    { degree: '', description: '', institution: '', startDate: '', endDate: '' },
    { degree: '', description: '', institution: '', startDate: '', endDate: '' }
    ]
  };
  const academic = shallow(<Academic userData={userData} />);

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
