import React from 'react';

const Skills = ({data}) => {
  return (
    <div>
      <h2 className="Skills-title">Skills</h2>
      {data.map((item,i) => (
        <p key={`skills-${i}`} className="Skills-item">{item.name}</p>
      ))}
    </div>
  );
};

export default Skills;
