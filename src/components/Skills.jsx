import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ 
  items = Array(3).fill({
    "name": "",
    "percentage": ""
  })
}) => {
  return (
    <div className="Skills-container hoverable">
      <h2 className="Skills-title">Skills</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="Skills-item">
            <h3>{item.name}</h3>
            <p>{item.percentage}</p>
          </li>
        )
        )}
      </ul>
    </div>
  );
};

export default Skills;