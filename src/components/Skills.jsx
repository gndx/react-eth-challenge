import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export const Skills = ({ className }) => {
  return (
    <Box className={className} classTitle="Skills-title" title={'Skills-title'}>
      <div>
        <p className={'Skills-item'}>Skills-item</p>
        <p className={'Skills-item'}>Skills-item</p>
        <p className={'Skills-item'}>Skills-item</p>
      </div>
    </Box>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
};

Skills.defaultProps = {
  className: '',
};

export default Skills;
