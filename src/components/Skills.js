import React from 'react';
import SkillsCard from './SkillsCard';

export default function Skills({ skills = [] }) {
  return (
    <div className='grid mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Skills-title text-2xl text-bold'>.Skills-title</h1>
      {skills.map((skillsItems, index) => (
        <SkillsCard
          className='Skills-item'
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          name={skillsItems.name}
          percentage={skillsItems.percentage}
        />
      ))}
    </div>
  );
}
