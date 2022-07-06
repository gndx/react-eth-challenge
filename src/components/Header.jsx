import React from 'react';

const Header = ({ children }) => {
  return (
    <header>
      <h1 className="Header-title">Leonardo Omaña</h1>
      {children}
    </header>
  );
};

export default Header;
