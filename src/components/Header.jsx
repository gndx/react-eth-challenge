import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Header = (props) => {
  const data = useContext(Context);

  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-start">
      <img className="w-52 h-52 rounded-full" src="../assets/profile.png" />

      <div className="Header-title flex flex-col justify-center items-center lg:items-start lg:ml-10">
        <h1 className="neon-name">{data?.name}</h1>
        <h2 className="mt-2">{data?.profession}</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Header;
