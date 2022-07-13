import React, { useContext } from 'react';
import About from './About';
import { Context } from '../containers/App';

const Header = () => {
  const data = useContext(Context);

  return (
    <>
      <div className="Header-title">
        <h1 className="text-style">{data.name}</h1>
        <h2 className="text-style">{data.profession}</h2>
      </div>
      <About />
    </>
  );
};

export default Header;
