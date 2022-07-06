import React from 'react';
import PropTypes from 'prop-types';

export const Box = ({ children, className }) => {
  return <div className={`${className} Box`}>{children}</div>;
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
