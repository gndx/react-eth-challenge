import React from 'react';
import '../styles/components/Header.styl';

function Header({name, avatar, children, profession, phone, email, website, address}){
    return (
        <header className="Header">
            <img src={avatar}></img>
            <div className="content">
                <h1 className="Header-title">{name}</h1>
                {children}
            </div>
        </header>
    );
}

export default Header;