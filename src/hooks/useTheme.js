import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const container = document.querySelector('html');
    container.classList.add('material-theme');

    const initTheme = window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches;
    setTheme(initTheme);
  }, []);

  const changeTheme = (isLight) => {
    let container = document.querySelector('html');
    container.classList.remove('dark-theme', 'light-theme');
    container.classList.add(isLight ? 'light-theme' : 'dark-theme');
    setTheme(isLight);
  };

  return [theme, changeTheme];
};

export { useTheme };
