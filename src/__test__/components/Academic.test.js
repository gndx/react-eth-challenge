import React from 'react';
// import { mount } from 'enzyme';
import {render, act, waitFor} from '@testing-library/react'
import Academic from '../../components/Academic';

describe('<Academic />', () => {
  // const academic = mount(<Academic />);
  const {container} = render(<Academic />);
  let containerFirstChild = container.firstChild;

  test('Academic render', () => {
    // expect(academic.length).toEqual(1);
    expect(container.childElementCount).toEqual(1);
  });

  test('Academic title', () => {
    // expect(academic.find('.Academic-title').length).toEqual(1);
    expect(containerFirstChild.getElementsByClassName('Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', async () => {
    // expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
    await act( async () => {
      render(<Academic />, container);
    });
    waitFor(() => {
      let containerSecondChild = container.childNodes[1];
      expect(containerSecondChild.getElementsByClassName('Academic-item').length).toBeGreaterThan(2);
    })
  });

});
