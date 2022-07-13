import React from 'react';
import '../styles/header.css';

const Header = (props) => {
  const { children } = props;

  return (
    <>
    <div className="Header">
    <div className="Header-title">
      {children}
    </div>
    </div>
    </>
  )
};
 export default Header;