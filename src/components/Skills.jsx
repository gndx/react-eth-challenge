import React from 'react';

function Skills({ skills }) {
  return (
    <div className="Skills">
      <div className="card">
        <div className="Skills-title">Skills</div>
        {skills?.map((skill) => (
          <div key={skill?.name} className="Skills-item">
            <div>Skill: {skill?.name}</div>
            <div>Percentage: {skill?.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
