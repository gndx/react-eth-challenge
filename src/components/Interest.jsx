import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export function Interest({ className, interestsList }) {
  const [interests, setInterests] = useState(interestsList);

  useEffect(() => {
    setInterests(interestsList);
  }, [interestsList]);

  return (
    <Box
      className={className}
      classTitle='Interest-title'
      title='Interest-title'
    >
      <section>
        {interests.map((item) => (
          <p className='Interest-item'>{item}</p>
        ))}
      </section>
    </Box>
  );
}

Interest.propTypes = {
  className: PropTypes.string,
  interestsList: PropTypes.arrayOf(PropTypes.string),
};

Interest.defaultProps = {
  className: '',
  interestsList: ['javascript', 'develop', 'backend', 'frontend'],
};

export default Interest;
