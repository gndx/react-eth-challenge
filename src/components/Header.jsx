import React from 'react';
import '../styles/components/App.styl';

const Header = ({ avatar, title, jobtitle, address, children }) => {
  return (
    <div className='Header'>
      <div className='Header__avatar'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='Header__description'>
        <h1 className='Header-title title'>{title}</h1>
        <h2 className='Header-item subtitle'>{jobtitle}</h2>
      </div>
      <div className='Header__about'>
        {children}
        <span className='Header-item'>{address}</span>
      </div>
    </div>
  );
};

export default Header;
