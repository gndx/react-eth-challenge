import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/Experience';
import Title from '../../components/Title';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: () => {
        return [
          {
            title: 'title 1',
            company: 'company 1',
            year: 'year 1',
            description: 'description 1'
          },
          {
            title: 'title 2',
            company: 'company 2',
            year: 'year 2',
            description: 'description 2'
          },
          {
            title: 'title 3',
            company: 'company 3',
            year: 'year 3',
            description: 'description 3'
          }
        ];
      }
    };
    return Component;
  }
}));

describe('<Experience />', () => {
  const experience = shallow(<Experience />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find(Title).length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('li').length).toBeGreaterThan(2);
  });
});
