import React from 'react';

const Header = ({ children }) => {
  return (
    <>
      <h1 className="Header-title">Header</h1>
      {children}
    </>
  );
};

export default Header;
