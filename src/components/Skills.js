import React from 'react';
import PercentageCard from './PercentageCard';

export default function Skills({ skills = ['', '', ''] }) {
  return (
    <div className='bg-teal-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5 w-full'>
      <h2 className='Skills-title text-4xl font-bold'>Skills</h2>
      {skills.map((skillsItems, index) => (
        <PercentageCard
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
