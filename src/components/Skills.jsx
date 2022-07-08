import React from 'react';

function Skills({ skills = Array(3).fill({ name: '', percentage: '' }) }) {
  return (
    <section>
      <h2 className='Skills-title'>Skills</h2>
      {
        skills.map(({ name, percentage }, index) => (
          <div className='Skills-item' key={`skill-${index}`}>
            <h3>{name}</h3>
            <progress max='100' value={percentage.split('%')[0]} />
          </div>
        ))
      }
    </section>
  );
}

export default Skills;
