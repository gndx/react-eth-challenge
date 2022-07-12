import React from 'react';
import { Boxing } from "../styles/components/Skills"

const Skills = ({ 
  skills = Array(3).fill({
    name: '',
    percentage:'',
}),
}) => {
  return (
    <Boxing>
      <h1 className="Skills-title">Skills</h1>
      <ul>
        {skills.map(
          (
            { name, percentage}, 
            index
            ) => (
          <li 
            key={`${name}_${percentage}_${index}`} className="Skills-item">
            <h3>{name}</h3>
            <h4>{percentage}</h4>
          </li>
        ))}
      </ul>
    </Boxing>
  );
};

export default Skills;