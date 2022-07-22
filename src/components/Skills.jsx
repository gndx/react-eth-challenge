import React from 'react';
import Card from './Card';

const Skills = ({ skills = Array(3).fill('') }) => {
    console.log(skills)
  return (
    <Card>
      <h2 className="Skills-title">Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={`${skill}_${index}`} className="Skills-item">
            <h4>{skill.name}</h4>
            <h4>{skill.percentage}</h4>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Skills; 