import React from 'react';

const Header = ({ children }) => {
  return (
    <article>
      <h1 className="Header-title">Leonardo Omaña</h1>
      {children}
    </article>
  );
};

export default Header;
