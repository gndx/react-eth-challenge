import React from 'react';
import '../styles/components/Skills.css';

function Skills({ skills = Array(3).fill({ name: '', percentage: '' }) }) {
  return (
    <section>
      <h3 className='Skills-title'>Skills</h3>
      <div className='Skills-container'>
      {skills.map(({ name, percentage }, index) => (
        <div className='Skills-item' key={index}>
          <h4>{name}</h4>
          <progress max='100' value={percentage.split('%')[0]} />
        </div>
        ))
      }
      </div>
    </section>
  );
}

export default Skills;
