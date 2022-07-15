import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../components/Skills';
import Title from '../../components/Title';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: () => {
        return ['skills 1', 'skills 2', 'skills 3'];
      }
    };
    return Component;
  }
}));

describe('<Skills />', () => {
  const skills = shallow(<Skills />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find(Title).length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('li').length).toBeGreaterThan(2);
  });
});
