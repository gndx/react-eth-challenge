import React from 'react';
import '../styles/components/Header.styl';

const Header = ({children, fullName, profileImage}) => {
  return (
    <header className="Header">
      <img src={profileImage} />
      <div>
        <h1 className="Header-title">{fullName}</h1>
        {children}
      </div>
    </header>
  );
}

export default Header;
