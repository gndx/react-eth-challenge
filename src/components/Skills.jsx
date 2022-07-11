import React from 'react';

const Skills = ({ userData }) => {

  return (
    <div>
      <h2 className='Skills-title'>Skills</h2>

      {userData.skills.map(({ name, percentage }, idx) => (

        <div className='Skills-item' key={`${idx}-${idx}`} >
          <h4>{name} - {percentage}</h4>
        </div>
      ))}
    </div>
  )
};

export default Skills;
