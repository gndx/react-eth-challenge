import React from 'react';
import '../styles/components/Header.styl';
import Avatar from './Avatar';
import Card from './Card';

const Header = ({ children }) => {
  return (
    <header className="Header">
      <Avatar />
      <Card>
        <div>
          <h1 className="Header-title">Leonardo Omaña</h1>
          {children}
        </div>
      </Card>
    </header>
  );
};

export default Header;
