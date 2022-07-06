import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export const Skills = () => {
  return (
    <Box classTitle="Skills-title" title={'Languages-title'}>
      <div>
        <p className={'Skills-item'}>Skills-item</p>
        <p className={'Skills-item'}>Skills-item</p>
        <p className={'Skills-item'}>Skills-item</p>
      </div>
    </Box>
  );
};

Skills.propTypes = {};

export default Skills;
