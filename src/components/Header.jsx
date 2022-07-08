import React from 'react';
import '../styles/components/App.styl';
import db from '../../data.json';

const Header = () => {
  return (
    <div className="Header-title">
      <h1 className="Header-h1">{db.data.name}</h1>
      <p className="Header-p">{db.data.profession}</p>
      <p className="Header-p">{db.data.email}</p>
    </div>
  );
};

export default Header;
