import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';
import '../styles/components/Header.styl';

/** Header profile */
const Header = ({ children }) => {
    const data = useContext(ProfileContext);
    return (
        <section className='Header'>
            <h1 className='Header-title'>{data.name}</h1>
            {children}
        </section>
    );
};

export default Header;
