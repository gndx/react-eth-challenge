import React from 'react';
import Card from './Card';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = ({ skills = Array(3).fill({ name: '', percentage: '' }) }) => {
  return (
    <Card>
      <h2 className="Skills-title">Skills</h2>
      <ul>
        {skills.map(({name, percentage }, index) => (
          <li
            key={`${name}_${percentage}_${index}`}
            className="Skills-item"
          >
            <h3>{name}</h3>
            <ProgressBar completed={percentage} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Skills;
