import React from 'react';
import PropTypes from 'prop-types';
const Header = ({ name, avatar, children }) => {
  return (
    <header className="Header">
      <div className="Header-img">
        <img src={avatar} alt="avatar" width={100} height={100} />
      </div>
      <div className="Header-content">
        <h1 className="Header-title">{name}</h1>
        {children}
      </div>
    </header>
  );
};
Header.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  children: PropTypes.object,
};
export default Header;
