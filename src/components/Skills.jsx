import React from 'react';
import { Titulo } from "../styles/components/Skills"

const Skills = ({ 
  skills = Array(3).fill({
    name: '',
    percentage:'',
}),
}) => {
  return (
    <div>
      <Titulo className="Skills-title">Skills</Titulo>
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
    </div>
  );
};

export default Skills;