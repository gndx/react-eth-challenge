import React from 'react';
// import { mount } from 'enzyme';
import {render} from '@testing-library/react'
import Header from '../../components/Header.jsx';

describe('<Header />', () => {
  // const header = mount(<Header />);
  const {container} = render(<Header />);
  let containerFirstChild = container.firstChild;

  test('Header render', () => {
    // expect(header.length).toEqual(1);
    expect(container.childElementCount).toBeGreaterThanOrEqual(1);
  });

  test('Header title', () => {
    // expect(header.find('.Header-title').length).toEqual(1);
    
    // expect(container.firstChild.getElementsByClassName('Header-title').length).toEqual(1);
    // That /\ does not work due to an error:
    // TypeError: Cannot read properties of null (reading 'getElementsByClassName')
    // > 99 |     expect(container.firstChild.getElementsByClassName('Header-title').length).toEqual(1);
    //      |                                 ^
    // It must be first assigned to a variable like:
    // let containerFirstChild = container.firstChild;
    // And then evaluate 'getElementsByClassName' from that variable...
    // expect(containerFirstChild.getElementsByClassName('Header-title').length).toEqual(1);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(containerFirstChild.getElementsByClassName('Header-title').length).toEqual(1);
  });

});
