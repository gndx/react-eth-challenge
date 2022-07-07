import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/components/Header.styl';

function Header({ children }) {
  const [theme, changeTheme] = useTheme();
  return (
    <div className='Header'>
      <figure className='Header-image'>
        <img src='' alt='' />
      </figure>
      <div className='Header-container'>
        <div className='Header-title'>
          <input onClick={() => changeTheme(!theme)} type='checkbox' value={theme} />
          <h1>Rafael Livise Livise</h1>
          <p className='Header-job-title'>Header-job-title</p>
        </div>

        <div className='Header-body'>
          <p className='Header-phone'>+00-000000</p>
          <p className='Header-email'>Header@email</p>
          <p className='Header-website'>header.com</p>
          <p className='Header-address'>Header-job-title</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Header;
