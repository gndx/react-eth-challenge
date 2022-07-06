import React from 'react';
import '../styles/components/Header.styl';

const Header = (props) => {
  return (
    <div className="Header">
      <img src="https://picsum.photos/200/300"/>
      {props.children}
    </div>
  );
}

export default Header;
