import React from 'react';

export const Header = ({name, avatar, profession, phone, email, website, address, children} ) => {
    return (
        <header className="Header">
            <h1 className="Header-title">{name}</h1>
            <div className='avatar'>
                <img src={avatar} className='avatar' ></img>
            </div>
            <p>
                <div className="Header-job-title"><strong>{profession}</strong></div>
                <div className="Header-phone"><strong>Phone:</strong> {phone}</div>
                <div className="Header-email"><strong>Email:</strong> {email}</div>
                <div className="Header-website"><strong>Website:</strong> {website}</div>
                <div className="Header-address"><strong>Location:</strong> {address}</div>
            </p>
            {children}
        </header>
    );
}
