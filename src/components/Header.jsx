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
