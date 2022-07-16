import React from 'react';

export const Header = ({name, avatar, profession, phone, email, website, address, children} ) => {
    return (
        <header className="Header">
            <h1 className="Header-title">{name}</h1>
            <div className='avatar'>
                <img src={avatar} className='avatar' ></img>
            </div>
            <h2 className="Header-job-title">{profession}</h2>
            <h3 className="Header-phone">{phone}</h3>
            <h3 className="Header-email">{email}</h3>
            <h3 className="Header-website">{website}</h3>
            <h3 className="Header-address">{address}</h3>
            {children}
        </header>
    );
}
