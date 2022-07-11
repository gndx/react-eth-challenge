import React from 'react';

function Header() {
  return (
    <header>
      <img src='https://avatars.githubusercontent.com/DanielMart-tech' alt='profile pic' />
      <h1 className='Header-title'>
        Daniel Martínez
      </h1>
      <h2 className='Header-job-title'>Full Stack Blockchain Developer</h2>
      <h3 className='Header-email'>danmarttech@gmail.com</h3>
    </header>
  );
}

export default Header;
