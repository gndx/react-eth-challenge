import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/components/Header.styl';

function Header({ children }) {
  const [theme, changeTheme] = useTheme();
  return (
    <div className='Header'>
      <input onClick={() => changeTheme(!theme)} type='checkbox' value={theme} />
      <h1 className='Header-title'>Rafael Livise</h1>
      <div>{children}</div>
    </div>
  );
}

export default Header;
