import React from 'react';
import PropTypes from 'prop-types';

export const Box = ({ children, className, title, classTitle }) => {
  return (
    <div className={`${className} Box`}>
      {title ? <h1 className={`${classTitle}`}>{title}</h1> : null}
      {children}
    </div>
  );
};

Box.propTypes = {
  className: PropTypes.string,
  classTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.elementType),
  ]),
};

export default Box;
