import React from 'react';
// import { mount } from 'enzyme';
/**
 * render: lets us render the component as React would
 * screen: a utility for finding elements the same way the user does
 */
// import {render, screen} from '@testing-library/react'
import { render, act, waitFor } from '@testing-library/react';
import About from '../../components/About';

describe('<About />', () => {
    // const about = mount(<About />);
    const { container } = render(<About />);
    const containerFirstChild = container.firstChild;

    test('About render', () => {
    // expect(about.length).toEqual(1);
        expect(container.childElementCount).toEqual(1);
    });

    test('About title', () => {
    // expect(about.find('.About-title').length).toEqual(1);
        expect(containerFirstChild.getElementsByClassName('About-title').length).toEqual(1);
    });

    test('About haves 3 items', async () => {
    // expect(about.find('.About-item').length).toBeGreaterThan(2);
        await act(async () => {
            render(<About />, container);
        });
        waitFor(() => {
            const containerSecondChild = container.childNodes[1];
            expect(containerSecondChild.getElementsByClassName('About-item').length).toBeGreaterThan(2);
        });
    });

});
