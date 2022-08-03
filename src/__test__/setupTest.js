import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as AppContext from '../context/AppContext';

configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');

jest
  .spyOn(AppContext, 'useAppContext')
  .mockImplementation(() => contextValues);