import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Picture from '../Picture';
import '../../styles/components/Header.styl';

const Header = ({ children }) => {
  const data = useContext(AppContext);
  return (
    <section className="header bg-news">
      <Picture avatar={data.avatar} />
      <h1 className="Header-title">{data.name}</h1>
      {children}
    </section>
  );
};

export default Header;
