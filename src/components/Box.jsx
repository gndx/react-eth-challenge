import React from 'react';
import styles from '../styles/styles.module.css';
import PropTypes from 'prop-types';

export const Box = ({ children, className }) => {
  return <div className={`${className} ${styles['Box']}`}>{children}</div>;
};

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.elementType),
  ]),
};

export default Box;
