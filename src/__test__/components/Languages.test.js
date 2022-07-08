import React from 'react';
// import { mount } from 'enzyme';
import {render, act, waitFor} from '@testing-library/react'
import Languages from '../../components/Languages';

describe('<Languages />', () => {
  // const languages = mount(<Languages />);
  const {container} = render(<Languages />);
  let containerFirstChild = container.firstChild;

  test('Languages render', () => {
    // expect(languages.length).toEqual(1);
    expect(container.childElementCount).toEqual(1);
  });

  test('Languages title', () => {
    // expect(languages.find('.Languages-title').length).toEqual(1);
    expect(containerFirstChild.getElementsByClassName('Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', async () => {
    // expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
    await act( async () => {
      render(<Languages />, container);
    });
    waitFor(() => {
      let containerSecondChild = container.childNodes[1];
      expect(containerSecondChild.getElementsByClassName('Languages-item').length).toBeGreaterThan(2);
    })
  });

});
