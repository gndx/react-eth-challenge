import React from 'react';
import db from '../../data.json';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <div>
      <h2 className="Skills-title">Skills</h2>
      <ul>
        {db.data.skills.map((skills) => (
          <SkillsCard key={skills.name} className="Skills-item" {...skills} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
