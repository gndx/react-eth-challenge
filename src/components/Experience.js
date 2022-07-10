import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function Experience({ experience = [] }) {
  return (
    <div className='mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Experience-title'>.Experience-tile</h1>
      <div className='mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6'>
        {experience.map((experienceItem, index) => (
          <ExperienceCard
            className='Experience-item'
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            name={experienceItem.jobTitle}
            description={experienceItem.jobDescription}
          />
        ))}
      </div>
    </div>
  );
}
