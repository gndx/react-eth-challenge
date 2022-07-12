import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: (key, object) => {
        if (typeof object === 'object' && object.returnObjects) return [];
        return '';
      }
    };
    return Component;
  }
}));
