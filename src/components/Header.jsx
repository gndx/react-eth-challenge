import React from 'react';

function Header({ data, children }) {
    let dataFromParent = data;
    if (typeof dataFromParent === 'undefined' || typeof dataFromParent.name === 'undefined') {
        dataFromParent = { experience: [] };
    }
    const { name, profession, address, email, website, phone, avatar } = dataFromParent;
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
