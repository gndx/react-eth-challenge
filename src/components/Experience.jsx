import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export const Experience = ({ className }) => {
  return (
    <Box
      className={className}
      classTitle="Experience-title"
      title={'Experience-title'}
    >
      <div>
        <p className={'Experience-item'}>Experience-item</p>
        <p className={'Experience-item'}>Experience-item</p>
        <p className={'Experience-item'}>Experience-item</p>
      </div>
    </Box>
  );
};

Experience.propTypes = {
  className: PropTypes.string,
};

Experience.defaultProps = {
  className: '',
};
export default Experience;
