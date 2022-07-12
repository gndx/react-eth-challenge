import React from 'react';
import '../styles/components/Header.styl';

function Header({ children }) {
  return (
    <header>
      <div className='Header__image--container'>
        <img className='Header__image' src='https://avatars.githubusercontent.com/onedrako' alt='profile-img' />
      </div>
      <div className='Header-data'>
        <h1 className='Header-title'>Header Title</h1>
        {children}
      </div>

    </header>
  );
};

export default Header;
