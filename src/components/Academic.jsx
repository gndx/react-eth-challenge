import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export const Academic = () => {
  return (
    <Box classTitle="Experience-title" title={'Academic-title'}>
      <div>
        <p className={'Academic-item'}>Experience-item</p>
        <p className={'Academic-item'}>Experience-item</p>
        <p className={'Academic-item'}>Experience-item</p>
      </div>
    </Box>
  );
};

Academic.propTypes = {};

export default Academic;
