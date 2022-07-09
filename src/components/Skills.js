/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import db from '../../data.json';
import MySkills from './MySkills';

function Skills() {
  return (
    <div className='container my-2'>
      <h2 className='Skills-title h3 fw-bold'>Skills</h2>
      <div className='row m-2'>
        {db.data.skills.map((e) => (
          <MySkills className='Skills-item' key={e.name} {...e} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
