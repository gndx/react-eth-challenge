import React from 'react';
import Card from '../Card';
import '../../styles/components/Skills.css';

function Skills({ skills }) {
  return (
    <Card>
      <h2 className='Skills-title'>Skills</h2>
      <ul className='Skills-list'>
        {skills?.map(({ name, percentage }) => (
          <li key={`${name}_${percentage}`} className='Skills-item'>
            <h3>{name}</h3>
            <div className='meter'>
              <span style={{ width: percentage }} />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Skills;
