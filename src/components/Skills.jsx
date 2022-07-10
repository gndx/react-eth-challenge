import React from 'react';
import '../styles/components/App.styl';

const Skills = ({ skill }) => {

  const skills = Array.from(new Set(skill));

  return (
    <div className='Skills'>
      <h2 className='Skills-title subtitle'>Skills</h2>
      <div>
        {skills.map((item) => <div className='Skills-item badge' key={item.name}>{`${item.name}  ${item.percentage}`}</div>)}
      </div>
    </div>
  );
};

export default Skills;
