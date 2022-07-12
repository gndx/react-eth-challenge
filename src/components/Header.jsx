import React from 'react';

const Header = ({ avatar, name, children }) => {
  return (
    <div className="container-header">
      <img
        className="header-img"
        src={avatar}
        alt=""
      />
      <div className="header-about">
        <h1 className="Header-title">{name}</h1>
        {children}
      </div>
    </div>
  );
};

export default Header;
