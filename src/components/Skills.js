import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const Skills = ({ skills = Array(3).fill(0) }) => {
  return (
    <div className="Skills background-green">
      <h2 className="Skills-title">Skills</h2>

      <ul className="global-ul">
        {skills.map((item, index) => (
          <li className="Skills-item" key={index}>
            <strong>{item.name}:</strong> {item.percentage}
          </li>
        ))}
      </ul>
    </div>
  );
};
Skills.propTypes = {
  skills: PropTypes.array,
};

export default Skills;
