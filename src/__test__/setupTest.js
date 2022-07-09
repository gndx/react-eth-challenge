// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
import '@testing-library/jest-dom';

global.fetch = require('jest-fetch-mock');
