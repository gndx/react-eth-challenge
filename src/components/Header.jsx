/* eslint-disable import/no-cycle */
/* eslint-disable jsx-quotes */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { appContext } from '../containers/AppContext';

function Header(props) {
  const { children } = props;
  const { avatar, name, social } = appContext();
  return (
    <header className="Header">
      <div className="Header-data">
        <img src={avatar} alt={name} />
        <div className="Header-title">
          <div>{children}</div>
        </div>
      </div>
      <div className="Social-item">
        {social.map((item) => (
          <a href={item.url} key={item.name} target='_blank' rel='noopener noreferrer'>
            <i className={item.icon} />
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
