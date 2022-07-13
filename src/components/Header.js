import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ name, profession, children }) => {
  return (
    <div className='Header'>

      <div className='Header-info'>
        <div className='Header-title'>
          {name}
        </div>
        <div className='Header-job-title'>{profession}</div>
        {children}
      </div>
      <div className='Header-avatar'>
        <img src='https://avatars.githubusercontent.com/u/13041580?v=4' alt='Avatar' />
      </div>
    </div>
  );
};

export default Header;
