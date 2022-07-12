import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';

/** Header profile */
const Header = ({ children }) => {
    const data = useContext(ProfileContext);
    return (
        <section className='Header-title'>
            <h1 className=''>{data.name}</h1>
            {children}
        </section>
    );
};

export default Header;
