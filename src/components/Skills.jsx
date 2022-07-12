import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div>
      <h1 className="Skills-title">Skills</h1>
      <div className="skills-container-items">
        {skills ? skills.map((items) => (
          <div className='single-item-skills Skills-item' key={`${items.name}-${items.percentage}`}>
            <h3>{items.name}</h3>
            <h3>{items.percentage}</h3>
          </div>
        )) : ''}
      </div>
    </div>
  );
};

export default Skills;
