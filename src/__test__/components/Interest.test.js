import React from 'react';
import { shallow } from 'enzyme';
import Interest from '../../components/Interest';
import Title from '../../components/Title';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: () => {
        return ['interest 1', 'interest 2', 'interest 3'];
      }
    };
    return Component;
  }
}));

describe('<Interest />', () => {
  const interest = shallow(<Interest />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find(Title).length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    expect(interest.find('li').length).toBeGreaterThan(2);
  });
});
