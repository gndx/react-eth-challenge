import React from 'react';
import styles from '../styles/styles.module.css';
import PropTypes from 'prop-types';
import { Box } from './Box';

const Avatar = ({ avatar }) => {
  return (
    <picture className={`${styles['Header-avatar']}`}>
      <img src={avatar} />
    </picture>
  );
};

const Header = ({ children, className, title }) => {
  return (
    <Box className={`${className} ${styles['Header-container']}`}>
      <Avatar />
      <div>
        <h1 className={`${styles['Header-title']}`}>{title}</h1>
        {children}
      </div>
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
