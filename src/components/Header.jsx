import React from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';
import { Box } from './Box';
import { useVite } from '../context/ViteContext';

const Avatar = ({ avatar }) => {
  return (
    <picture className={'Header-avatar'}>
      <img src={avatar} />
    </picture>
  );
};

const Header = ({ children, className, title }) => {
  const { profile } = useVite();
  return (
    <Box className={`${className} Header-container`}>
      <header style={{ display: 'flex' }}>
        <Avatar avatar={profile?.avatar} />
        <div>
          <h1 className="Header-title">{title ? title : profile?.name}</h1>
          {children}
        </div>
      </header>
    </Box>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
};

Avatar.propTypes = {
  avatar: PropTypes.string,
};
Avatar.defaultProps = {
  avatar: 'https://arepa.s3.amazonaws.com/melissa.jpg',
};

export default Header;
