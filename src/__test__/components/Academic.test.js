import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {
  const data = {
    Academic: [
      {
        degree: 'Ingeniería en sistemas con mención en gestión',
        description: 'Ingeniería en sistemas',
        endDate: '2016',
        institution: 'Universidad Politécnica Salesiana',
        startDate: '2011',
      },
      {
        degree: 'Ingeniería en sistemas con mención en gestión',
        description: 'Ingeniería en sistemas',
        endDate: '2016',
        institution: 'Universidad Politécnica Salesiana',
        startDate: '2011',
      },
      {
        degree: 'Ingeniería en sistemas con mención en gestión',
        description: 'Ingeniería en sistemas',
        endDate: '2016',
        institution: 'Universidad Politécnica Salesiana',
        startDate: '2011',
      },
    ],
  };
  const academic = shallow(<Academic {...data} />);

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
