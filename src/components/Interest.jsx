import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export const Interest = ({ className }) => {
  return (
    <Box
      className={className}
      classTitle="Interest-title"
      title={'Interest-title'}
    >
      <div>
        <p className={'Interest-item'}>Experience-item</p>
        <p className={'Interest-item'}>Experience-item</p>
        <p className={'Interest-item'}>Experience-item</p>
      </div>
    </Box>
  );
};

Interest.propTypes = {
  className: PropTypes.string,
};

Interest.defaultProps = {
  className: '',
};

export default Interest;
