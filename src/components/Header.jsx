<<<<<<< HEAD
import React from 'react'

const Header = () => {
  return (
    <header>
      <h1 className="Header-title">OLa</h1>
      <p className="Header-job-title"></p>
      <p className="Header-phone"></p>
      <p className="Header-email"></p>
      <p className="Header-website"></p>
      <p className="Header-adress"></p>
    </header>
  )
}

export default Header
=======
import React from 'react';
import About from './About';
import '../styles/components/Header.styl';

function Header({ avatar, name, profession, phone, email, website, address }) {
  return (
    <header className='Header-title'>
      <About
        avatar={avatar}
        name={name}
        profession={profession}
        phone={phone}
        email={email}
        website={website}
        address={address}
      />
    </header>
  );
}

export default Header;
>>>>>>> test
