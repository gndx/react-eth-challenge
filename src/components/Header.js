import React from 'react';
import { Avatar, Div } from '../styles/Header';

function Header({ children, avatar }) {
  return (
    <Div className='Header-title'>
      <Avatar src={avatar} />
      {children}
    </Div>
  );
}

export default Header;
