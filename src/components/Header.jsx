import React from 'react';
import { Cabecera  } from '../styles/components/Header';

const Header = ({name,profession, cellphone, email, website,address}) => {
    return (
        <Cabecera>
            <h1 className='Header-title'>{name}</h1>
            <h2 className='Header-job-title'>{profession}</h2>
            <div>
            <p className='Header-phone'>{cellphone}</p>
            <p className='Header-email'>{email}</p>
            <p className='Header-website'>{website}</p>
            <p className='Header-address'>{address}</p>
            </div>
        </Cabecera>
        
    )
}

export default Header;