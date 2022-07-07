import React from 'react';

function Header() {
  return (
    <header className='Header'>
      <section className='Header-img'>
        <img src='./img.jpg' alt='Profile img' />
      </section>
      <section className='Header-content'>
        <h1 className='Header-title'>Header title</h1>
        <div className='Header-contacts'>
          <p className='Header-phone'>phone</p>
          <p className='Header-email'>email</p>
          <p className='Header-website'>web</p>
        </div>
        <p className='Header-address'>adress</p>
      </section>
    </header>
  );
}

export default Header;
