import React from 'react';
import { HeaderContainer } from './style';

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <h1 className="Header-title">Header</h1>
      {children}
    </HeaderContainer>
  );
};

export default Header;
