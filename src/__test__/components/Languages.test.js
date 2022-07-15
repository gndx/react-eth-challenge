import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';
import Title from '../../components/Title';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: () => {
        return [
          {
            language: 'language 1',
            level: 'level 1'
          },
          {
            language: 'language 2',
            level: 'level 2'
          },
          {
            language: 'language 3',
            level: 'level 3'
          }
        ];
      }
    };
    return Component;
  }
}));

describe('<Languages />', () => {
  const languages = shallow(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find(Title).length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('li').length).toBeGreaterThan(2);
  });
});
