import React from 'react';
import data from '../../data.json';

import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <div className="Header">
      <img src={data.data?.avatar} alt={data.data?.name} />
      <div>
        <h2 className="Header-title">
          { data.data?.name }
        </h2>
        <span className="Header-job-title">
          { data.data?.profession }
        </span>
        { children }
        <span className="Header-address">
          { data.data?.address }
        </span>
      </div>
    </div>
  );
}

export default Header;