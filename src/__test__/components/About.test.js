import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../components/About';

describe('<About />', () => {
    const mockAbout = ['LinkedIn', 'Twitter', 'Facebook'];
    const about = shallow( < About social={ mockAbout } / > );

    test('About render', () => {
        expect(about.length).toEqual(1);
    });

    test('About title', () => {
        expect(about.find('.About-title').length).toEqual(1);
    });

    test('About haves 3 items', () => {
        expect(about.find('.About-item').length).toBeGreaterThan(2);
    });

});