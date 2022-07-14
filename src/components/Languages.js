import React from 'react';
import PercentageCard from './PercentageCard';

export default function Languages({ languages = ['', '', ''] }) {
  return (
    <div className='bg-teal-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5 w-full'>
      <h2 className='Languages-title text-4xl font-bold'>Languages</h2>
      {languages.map((languagesItems, index) => (
        <PercentageCard
          className='Languages-item'
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          name={languagesItems.name}
          percentage={languagesItems.percentage}
        />
      ))}
    </div>
  );
}
