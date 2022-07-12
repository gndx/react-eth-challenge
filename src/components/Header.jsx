import React from 'react';
import '../styles/components/Header.css';

function Header({
  name,
  avatar,
  children,
}) {
  return (
    <header>
      <img src={avatar} alt='Profile pic'/>
      <div className='About-container'>
        <h1 className='Header-title'>
          {name}
        </h1>
        
        {children}

      </div>
    </header>
  );
}

export default Header;