import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export const Languages = () => {
  return (
    <Box classTitle="Languages-title" title={'Languages-title'}>
      <div>
        <p className={'Languages-item'}>Languages-item</p>
        <p className={'Languages-item'}>Languages-item</p>
        <p className={'Languages-item'}>Languages-item</p>
      </div>
    </Box>
  );
};

Languages.propTypes = {};

export default Languages;
