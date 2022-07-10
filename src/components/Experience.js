import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function Experience({ experience = [] }) {
  return (
    <div className='mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Experience-title text-4xl mob:text-3xl laptop:text-4xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5'>.Experience-title</h1>
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
