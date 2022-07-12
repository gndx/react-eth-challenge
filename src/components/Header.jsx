import React from 'react';


export const Header = ({children, avatar = ""}) => (
    <header className="Header">
        <img className="Header-photo" src={avatar}></img>
        {children}
    </header>
)

export default  Header;