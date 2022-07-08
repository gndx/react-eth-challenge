import React from 'react';
// import { mount } from 'enzyme';
import {render, act, waitFor} from '@testing-library/react'
import Skills from '../../components/Skills';

describe('<Skills />', () => {
  // const skills = mount(<Skills />);
  render(<Skills />);
  const {container} = render(<Skills />);
  let containerFirstChild = container.firstChild;

  test('Skills render', () => {
    // expect(skills.length).toEqual(1);
    expect(container.childElementCount).toEqual(1);
  });

  test('Skills title', () => {
    // expect(skills.find('.Skills-title').length).toEqual(1);
    expect(containerFirstChild.getElementsByClassName('Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', async () => {
    // expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
    await act( async () => {
      render(<Skills />, container);
    });
    waitFor(() => {
      let containerSecondChild = container.childNodes[1];
      expect(containerSecondChild.getElementsByClassName('Skills-item').length).toBeGreaterThan(2);
    })


  });

});
