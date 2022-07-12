import React from 'react';
import { Titulos } from '../styles/components/Header';

const Header = ({name,profession, cellphone, email, website,address}) => {
    return (
        <div>
            <Titulos className='Header-title'>{name}</Titulos>
            <h3 className='Header-job-title'>{profession}</h3>
            <h3 className='Header-phone'>{cellphone}</h3>
            <h3 className='Header-email'>{email}</h3>
            <h3 className='Header-website'>{website}</h3>
            <h3 className='Header-address'>{address}</h3>
        </div>
        
    )
}

export default Header;