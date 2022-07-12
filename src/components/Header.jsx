import React from 'react';
import Card from './Card';
import Avatar from './Avatar';

const Header = ({ children }) => {
  return (
    <header className="Header">
      <Avatar />
      <Card>
        <div>
          <h1 className="Header-title">Gonzalo Daniel Aguilar</h1>
          {children}
        </div>
      </Card>
    </header>
  );
};

export default Header;
