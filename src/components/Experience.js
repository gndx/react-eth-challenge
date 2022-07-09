/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MyExperience from './MyExperience';
import db from '../../data.json';

function Experience() {
  return (
    <div className='container my-2'>
      <p className='Experience-title h3 fw-bold'>Experience</p>
      <div className='row m-2'>
        {db.data.experience.map((e) => (
          <MyExperience className='Experience-item' key={e.company} {...e} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
