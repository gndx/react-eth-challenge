import React from 'react';

const Header = ({ children }) => {
  return (
    <header className="Header">
      <div className="Header-img">
        <img src="./img/avatar.jpeg" alt="avatar" width={100} height={100} />
      </div>
      <div className="Header-content">
        <h1 className="Header-title">Renny Petit</h1>
        {children}
      </div>
    </header>
  );
};

export default Header;
