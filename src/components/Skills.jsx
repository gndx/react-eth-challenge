import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export function Skills({ className, skillLilst }) {
  const [skils, setSkils] = useState(skillLilst);

  useEffect(() => {
    setSkils(skillLilst);
  }, [skillLilst]);

  return (
    <Box className={className} classTitle="Skills-title" title="Skills-title">
      <section>
        {skils.map(({ name, percentage }) => (
          <p key={name} className="Skills-item">
            {`${name} - ${percentage}`}
          </p>
        ))}
      </section>
    </Box>
  );
}

Skills.propTypes = {
  className: PropTypes.string,
  skillLilst: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      percentage: PropTypes.string,
    })
  ),
};

Skills.defaultProps = {
  className: '',
  skillLilst: [
    {
      name: 'HTML5',
      percentage: '75%',
    },
    {
      name: 'CSS',
      percentage: '25%',
    },
    {
      name: 'JavaScript',
      percentage: '85%',
    },
  ],
};

export default Skills;
