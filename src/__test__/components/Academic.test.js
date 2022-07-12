import React from 'react';
import { shallow } from 'enzyme';
import Academic from '../../components/Academic';
import Title from '../../components/Title';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: () => {
        return [
          {
            title: 'title 1',
            institute: 'institute 1',
            year: 'year 1',
            link: 'link 1'
          },
          {
            title: 'title 2',
            institute: 'institute 2',
            year: 'year 2',
            link: 'link 2'
          },
          {
            title: 'title 3',
            institute: 'institute 3',
            year: 'year 3',
            link: 'link 3'
          }
        ];
      }
    };
    return Component;
  }
}));

describe('<Academic />', () => {
  const academic = shallow(<Academic />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find(Title).length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('li').length).toBeGreaterThan(2);
  });
});
