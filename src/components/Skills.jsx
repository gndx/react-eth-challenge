import React from 'react';
import data from '../../data.json';

const Skills = () => {
  return (
    <div className="Skills">
      <h2 className="Skills-title">
        Habilidades
      </h2>
      {data && data.data.skills.map(
        item => (
          <span key={item.name} className="Skills-item">
            {item.name} - {item.percentage}
          </span>
        )
      )}
    </div>
  );
}

export default Skills;