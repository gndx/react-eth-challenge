import React from 'react';
import { Titulos } from '../styles/components/Header';

const Header = () => {
    return (
        <div>
            <Titulos className='Header-title'>Jose Pina</Titulos>
            <h3 className='Header-job-title'>Smart Contract Dev</h3>
            <h3 className='Header-phone'>+584127170707</h3>
            <h3 className='Header-email'>josepina@pinalikefrui.com</h3>
            <h3 className='Header-website'>pinalikefruit.com</h3>
            <h3 className='Header-address'>Toulouse</h3>
        </div>
        
    )
}

export default Header;