import React from 'react';
// import { mount } from 'enzyme';
import { render, act, waitFor } from '@testing-library/react';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
    // const experience = mount(<Experience />);
    const { container, debug } = render(<Experience />);
    const containerFirstChild = container.firstChild;

    debug();

    test('Experience render', () => {
    // expect(experience.length).toEqual(1);
        expect(container.childElementCount).toEqual(1);
    });

    test('Experience title', () => {
    // expect(experience.find('.Experience-title').length).toEqual(1);
        expect(containerFirstChild.getElementsByClassName('Experience-title').length).toEqual(1);
    });

    it('Experience haves 3 items', async () => {
    // expect(experience.find('.Experience-item').length).toBeGreaterThan(2);
        await act(async () => {
            render(<Experience />, container);
        });
        waitFor(() => {
            const containerSecondChild = container.childNodes[1];
            expect(containerSecondChild.getElementsByClassName('Experience-item').length).toBeGreaterThan(2);
        });
    });

});
