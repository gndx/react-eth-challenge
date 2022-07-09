import React from 'react';

function Header({name}){
    return (
        <header className="Header">
            <h1 className="Header-title">{name}</h1>
        </header>
    );
}

export default Header;