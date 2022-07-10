import React from 'react';
import AcademicCard from './AcademicCard';

export default function Academic({ academic = [] }) {
  return (
    <div className='grid mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Academic-title text-2xl text-bold'>.Academic-title</h1>
      {academic.map((academicItems, index) => (
        <AcademicCard
          className='Academic-item'
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          institution={academicItems.institution}
          description={academicItems.description}
        />
      ))}
    </div>
  );
}
