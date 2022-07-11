import React from 'react';

export default function ExperienceCard({ name, description, company, startDate, endDate }) {
  return (
    <div className='w-full p-4 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 cursor-pointer'>
      <h1 className='text-3xl'>{name}</h1>
      <p className='text-xl font-semi-bold  mt-2'>{company}</p>
      <p className='text-l opacity-40'>{startDate} - {endDate}</p>
      <p className='opacity-80 text-xl'>
        {description}
      </p>
    </div>
  );
}
