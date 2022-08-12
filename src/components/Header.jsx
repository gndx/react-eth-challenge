import React, { useContext } from 'react';
import '../styles/components/Header.styl';
import AppContext from '../context/AppContext';

const Header = ({ children }) => {
    const data = useContext(AppContext);
    return (
        <header className="Header">
          <img alt="profile photo" src={data.avatar} />
          <h1 className="Header-title">{data.name}</h1>
          <h2 className="Header-job-title">{data.profession}</h2>
          {children}
        </header>
    )
};

export default Header;
