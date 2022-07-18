import React from 'react';
import '../styles/components/Header.styl';

const Header = (props) => {
  return (
    <header className='Header'>
      <img src={props.Image}/>
      <div>
        <h1 className='Header-title'>{props.Name}</h1>
       	{props.children}
        		
      </div>
    </header>
  );
};

export default Header;