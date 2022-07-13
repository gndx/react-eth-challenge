import React from 'react';
import '../styles/components/Header.styl';
import Avatar from './Avatar';
import Card from './Card';

const Header = ({ avatar, children, name }) => {
  return (
    <header className="Header">
      <Avatar avatar={avatar} />
      <Card>
        <div>
          <h1 className="Header-title">{name}</h1>
          {children}
        </div>
      </Card>
    </header>
  );
};

export default Header;