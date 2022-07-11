import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children: about, fullName, profileImage }) => {
  return (
    <header className='Header'>
      <img src={profileImage} alt={`${fullName} profile avatar`} />
      <div>
        <h1 className='Header-title'>{fullName}</h1>
        {about}
      </div>
    </header>
  );
};

export default Header;
