import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children, name, avatar }) => {
  return (
    <div className="Header-container">
      <img src={avatar} />
      <h1 className="Header-title">{name}</h1>
      {children}
    </div>
  );
};

export default Header;