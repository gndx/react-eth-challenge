import React from 'react';
import ExpCard from './ExpCard';
import db from '../../data.json';

const Experience = () => {
  return (
    <div className='experience'>
    <h2 className='Experience-title'>Experience</h2>
    <ul >
      {db.data.experience.map((exp) => (
        <ExpCard className='Experience-item' {...exp}/>
      ))}
    </ul>
    </div>
  );
};

export default Experience;
