import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <div className="Header">
      <img src="https://picsum.photos/200/300"/>
      <h1 className="Header-title">Julian Murphy</h1>
      <h3 className="Header-job-title">Developer</h3>
      <p className="Header-phone">+54 293129451</p>
      <p className="Header-email">miemail@email.com</p>
      <p className="Header-website">mi-site.com</p>
      <p className="Header-address">Av. siempre viva 1234</p>
    </div>
  );
}

export default Header;
