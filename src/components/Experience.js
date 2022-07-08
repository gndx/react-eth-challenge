import React from 'react';
import MyExperience from './MyExperience';
import db from '../../data.json';

const Experience = () => {
  return (
    <div className='p-2 m-5'>
      <p className='Experience-title text-lg font-bold'>Experience</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {db.data.experience.map((e) => (
        <MyExperience className='Experience-item' key={e.company} {...e}/>
        ))}
      </div>
    </div>
  );
};

export default Experience;