import React from 'react';
import './styles.styl';

const Skills = ({ data }) => {
  return (
    <div className="skills">
      <h2 className="Skills-title">Skills</h2>
      {data.map((item, i) => (
        <p key={`skills-${i}`} className="Skills-item">
          {item.name} <span>{item.percentage}</span>
        </p>
      ))}
    </div>
  );
};

export default Skills;
