import React from 'react';
// import { mount } from 'enzyme';
import { render, act, waitFor } from '@testing-library/react';
import Interest from '../../components/Interest';

describe('<Interest />', () => {
    // const interest = mount(<Interest />);
    render(<Interest />);
    const { container } = render(<Interest />);
    const containerFirstChild = container.firstChild;

    test('Interest render', () => {
    // expect(interest.length).toEqual(1);
        expect(container.childElementCount).toEqual(1);
    });

    test('Interest title', () => {
    // expect(interest.find('.Interest-title').length).toEqual(1);
        expect(containerFirstChild.getElementsByClassName('Interest-title').length).toEqual(1);
    });

    test('Interest has 3 items', async () => {
    // expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
        await act(async () => {
            render(<Interest />, container);
        });
        waitFor(() => {
            const containerSecondChild = container.childNodes[1];
            expect(containerSecondChild.getElementsByClassName('Interest-item').length).toBeGreaterThan(2);
        });

    });

});
