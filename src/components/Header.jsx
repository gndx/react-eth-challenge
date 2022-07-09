import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

function Header({ children }) {
    const [data, setData] = useState({ });

    useEffect(() => {
        (async function () {
            try {
                const result = await getData();
                setData(result.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    const { name, profession, address, email, website, phone, avatar } = data;

    return (
        <div>
            <div className='Header-box'>
                <div className='Header-image'><img src={avatar} alt='Profile avatar' /></div>
                <div className='Header-center'>
                    <div className='Header-title'>{name}</div>
                    <div className='Header-job-title'>{profession}</div>
                    <div className='Header-phone'>{phone}</div>
                    <div className='Header-email'>{email}</div>
                    <div className='Header-website'>{website}</div>
                    <div className='Header-address'>{address}</div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;
