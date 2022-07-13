import React from 'react';

export default function Header({children, avatar, email, name, profession}){
    return (
        <>
            <header className='Header-container'>
                <div className="imagen-container">
                    <img className='profile-image' src={avatar} alt="profile image jairolopezlon" />
                </div>
                <div className='header-content'>
                    <div className="profile-data">
                        <div className='Header-profession'>{profession}</div>
                        <div className="Header-title">{name}</div>
                        {children}
                    </div>
                    <a href={"mailto:" + email} className='btn-hire_me'>Hire me!</a>
                </div>
            </header>
        </>
    )
}