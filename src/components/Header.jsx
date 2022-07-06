import React from 'react';
import { useTheme } from '../hooks/useTheme';
const Header = ({ children }) => {
  const [theme, changeTheme] = useTheme();
  return (
    <div>
      <input
        onClick={() => changeTheme(!theme)}
        type="checkbox"
        value={theme}
      />
      <h1>Header</h1>
      <div>{children}</div>
    </div>
  );
};

export default Header;
