import React from 'react';
import '../styles/components/Header.styl';

const Header = (props) => {
  return (
    <header className="Header">
      <img src="https://picsum.photos/200/300"/>
      <div>
        <h1 className="Header-title">Julian Murphy</h1>
        {props.children}
      </div>
    </header>
  );
}

export default Header;
