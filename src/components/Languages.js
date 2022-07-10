import React from 'react';
import PercentageCard from './PercentageCard';

export default function Languages({ languages = [] }) {
  return (
    <div className='grid mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
      <h1 className='Languages-title text-4xl mob:text-3xl laptop:text-4xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5'>.Languages.title</h1>
      {languages.map((languagesItems, index) => (
        <PercentageCard
          className='languages-item'
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          name={languagesItems.name}
          percentage={languagesItems.percentage}
        />
      ))}
    </div>
  );
}
